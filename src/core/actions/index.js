export const FEEDBACK_RETRIEVE = 'FEEDBACK_RETRIEVE';
export const FEEDBACK_CHANGE = 'FEEDBACK_CHANGE';
export const FEEDBACK_ADD = 'FEEDBACK_ADD';
export const FEEDBACK_DELETE = 'FEEDBACK_DELETE';
export const FEEDBACK_DUMP = 'FEEDBACK_DUMP';

export const JOBS_RETRIEVE = 'JOBS_RETRIEVE';
export const JOBS_DUMP = 'JOBS_DUMP';
export const JOBS_ADD = 'JOBS_ADD';
export const JOBS_DELETE = 'JOBS_DELETE';

import { pathToJS } from 'react-redux-firebase';


export function feedbackChange(id, index, item, value) {

    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('feedback/' + id);
        console.log(value);
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
    /*return {
        type : FEEDBACK_ADD,
        item: item
    }*/

    return function(dispatch, getState, getFirebase) {
        var fb = getFirebase();
        var ref = fb.database().ref('feedback');
        var pushJob = ref.push();
        var data = {
            'id' : pushJob.key,
            'jobId' : item.jobId,
            'feedback' : item.feedBack,
            'assignedTo' : item.assignTo,
            'assignedBy' : 'user-2',
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

export function feedbackDelete(item)
{
    return {
        type : FEEDBACK_DELETE,
        item: item
    }
}

export function feedbackRetrieve(id)
{
   /* return {
        type : FEEDBACK_RETRIEVE,
        id : id
    }*/

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

