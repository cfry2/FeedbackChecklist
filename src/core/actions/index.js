export const FEEDBACK_RETRIEVE = 'FEEDBACK_RETRIEVE';
export const FEEDBACK_CHANGE = 'FEEDBACK_CHANGE';
export const FEEDBACK_ADD = 'FEEDBACK_ADD';
export const FEEDBACK_DELETE = 'FEEDBACK_DELETE';
export const FEEDBACK_DUMP = 'FEEDBACK_DUMP';

export const JOBS_RETRIEVE = 'JOBS_RETRIEVE';
export const JOBS_DUMP = 'JOBS_DUMP';
export const JOBS_ADD = 'JOBS_ADD';
export const JOBS_DELETE = 'JOBS_DELETE';

export const USER_AUTHORIZE = 'USER_AUTHORIZE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_NOTIFY = 'USER_NOTIFY';

export const GET_USERS = "GET_USERS";

export const UPDATE_TITLE = "UPDATE_TITLE";


import { pathToJS, getFirebase } from 'react-redux-firebase';
import {fromJS, Map, List} from 'immutable';
import {googleSignIn} from 'native/auth';



export function feedbackChange(id, jobId, index, item, value) {

    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('jobs/'+jobId+'/feedback/' + id);
        ref.update({[item] : value});

        dispatch({
            type : FEEDBACK_CHANGE
        });
    }
}

export function feedbackAdd(item)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('jobs/' + item.jobId + '/feedback');
        var pushJob = ref.push();
        var data = {
            'id' : pushJob.key,
            'jobId' : item.jobId,
            'feedback' : item.feedBack,
            'assignedTo' : item.assignTo,
            'assignedBy' : item.assignBy,
            'completed' : false,
            'approved' : false
        }

        dispatch({
            type : FEEDBACK_ADD
        });
    }

}

export function feedbackDelete(index, id, jobId)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('jobs/' + jobId + '/feedback/' + id);

        ref.remove()
            .then(function() {
                dispatch({
                    type : FEEDBACK_DELETE
                });
            });
    }
}

export function feedbackRetrieve(id)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('jobs/' + id + '/feedback');
        ref.on("value", function(snapshot) {
            var data = [];
            dispatch({
                type : FEEDBACK_RETRIEVE,
                data: snapshot.val()
            });
        });
    };
}

export function feedbackDump()
{
    return {
        type : FEEDBACK_DUMP
    }
}

export function jobsRetrieve()
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('jobs');

        ref.on("value", function(snapshot) {
                dispatch({
                    type : JOBS_RETRIEVE,
                    data: snapshot.val()
                });
        })
    };
}

export function jobsDump()
{
    return {
        type : JOBS_DUMP
    }
}

export function jobsAdd(job)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('jobs');
        var pushJob = ref.push();

        pushJob.set({
            'id' : pushJob.key,
            'jobName' : job.job
        })
        dispatch({
            type : JOBS_ADD
        });
    }
}

export function jobsDelete(job)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('jobs/' + job);

        ref.remove()
            .then(function() {
                dispatch({
                    type : JOBS_DELETE
                });
            });
    }
}

export function userAuthorize() {
    return function(dispatch, getState, getFirebase) {
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem('currentUser') || localStorage.getItem('currentUser') == "null" ) {
                const data = googleSignIn().then(function(data) {
                    var userObject = {
                        id : data.uid,
                        name : data.displayName,
                        email: data.email
                    };
                    resolve("User authorized");
                    dispatch({
                        type : USER_AUTHORIZE,
                        user: userObject
                    });
                });

            }
            else {
                resolve("User authorized");
                dispatch({
                    type : USER_AUTHORIZE,
                    user: JSON.parse(localStorage.getItem('currentUser'))
                });
            }
            
        });
    }
}

export function userLogout() {
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        fb.logout();
        localStorage.setItem('currentUser', null)
        dispatch({
            type : USER_LOGOUT
        });
    }
}

export function getUsers() {
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('users');
        ref.once("value")
            .then(function(snapshot) {
                var newUser;
                if (getState().currentUser.get('id') in snapshot.val()) {
                    newUser = null;
                }
                else {
                    newUser = getState().currentUser;
                    ref.child(getState().currentUser.get('id')).set(getState().currentUser.get('name'));
                }
                dispatch({
                    type : GET_USERS,
                    data: snapshot.val(),
                    newUser: newUser
                });
            });
    }
}

export function notifyNewFeedback(user, job) {
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var itemAdded = false;

        var ref = fb.database().ref('jobs/' + job + '/feedback');
        ref.on('child_added', function(data) {
            if (!itemAdded) { 
                //return
            }
            else {
                console.log(data.val());
            }
            
        });

        ref.once('value', (data) => {
            itemAdded = true;
        })

        dispatch({
            type : USER_NOTIFY
        });

    }
}

export function updateTitle(title)
{
    return {
        type : UPDATE_TITLE,
        data : title
    }
}