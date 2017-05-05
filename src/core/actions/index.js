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


export function feedbackChange(index, item, value) {
    return {
        type : FEEDBACK_CHANGE,
        index : index,
        item: item,
        value : value
    }
}

export function feedbackAdd(item)
{
    return {
        type : FEEDBACK_ADD,
        item: item
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
    return {
        type : FEEDBACK_RETRIEVE,
        id : id
    }
}

export function feedbackDump()
{
    return {
        type : FEEDBACK_DUMP
    }
}

export function jobsRetrieve()
{
   /*console.log(getFirebase());
    return {
        type : JOBS_RETRIEVE
    }*/

    return function(dispatch, getState, getFirebase) {
        // Immediately dispatch init action
        //console.log(getFirebase());
        /*dispatch({
            type : JOBS_RETRIEVE
        });*/

        var fb = getFirebase();
        var ref = fb.database().ref('jobs');
        //console.log(ref);
        ref.once("value")
            .then(function(snapshot) {
                dispatch({
                    type : JOBS_RETRIEVE,
                    data: snapshot.val()
                });
            });
        /*request
            .get('/data.json')
            .end(function(err, res){
                if(err) {
                    dispatch({
                        type : 'REQUEST_DATA_ERROR',
                        err : err
                    });
                } else {
                    dispatch({
                        type : 'JOBS_RETRIEVE',
                        data : res.body
                    });
                }
            });*/
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
    return {
        type : JOBS_ADD,
        job: job
    }
}

export function jobsDelete(job)
{
    return {
        type : JOBS_DELETE,
        job: job
    }
}

