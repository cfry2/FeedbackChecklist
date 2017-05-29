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

export const GET_USERS = "GET_USERS";

import { pathToJS } from 'react-redux-firebase';
import {fromJS, Map, List} from 'immutable';


export function feedbackChange(id, index, item, value) {

    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('feedback/' + id);
        ref.update({[item] : value});

        dispatch({
            type : FEEDBACK_CHANGE,
            index : index,
            item: item,
            value : value
        });
    }
}

export function feedbackAdd(item)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('feedback');
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

        pushJob.set(data);

        dispatch({
            type : FEEDBACK_ADD,
            feedback : data
        });
    }

}

export function feedbackDelete(index, id)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('feedback/' + id);

        ref.remove()
            .then(function() {
                dispatch({
                    type : FEEDBACK_DELETE,
                    item: index
                });
            });
    }
}

export function feedbackRetrieve(id)
{
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('feedback');
        var data = [];
        ref.once("value")
            .then(function(snapshot) {
                Object.keys(snapshot.val()).forEach(function(child) {
                    if (snapshot.val()[child].jobId == id) {
                        data.push(snapshot.val()[child]);
                    } 
                });
                dispatch({
                    type : FEEDBACK_RETRIEVE,
                    data: data
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

        ref.once("value")
            .then(function(snapshot) {
                dispatch({
                    type : JOBS_RETRIEVE,
                    data: snapshot.val()
                });
            });
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
            type : JOBS_ADD,
            job: job,
            id : pushJob.key
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
                    type : JOBS_DELETE,
                    job: job
                });
            });
    }
}

export function userAuthorize() {
    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        if (!localStorage.getItem('currentUser') || localStorage.getItem('currentUser') == "null" ) {
            fb.login({provider: 'google', type: 'popup'}).then(function(user) {
                var userObject = {
                    id : user.profile.uid,
                    name : user.profile.displayName,
                    email: user.profile.email
                };
                localStorage.setItem('currentUser', JSON.stringify(userObject));
                dispatch({
                    type : USER_AUTHORIZE,
                    user: userObject
                });
            });
        }
        else {

            dispatch({
                type : USER_AUTHORIZE,
                user: JSON.parse(localStorage.getItem('currentUser'))
            });
        }
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
                    console.log('user already exists');
                }
                else {
                    newUser = getState().currentUser;
                    console.log('new user adding now');
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