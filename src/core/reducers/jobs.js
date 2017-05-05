import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';

import data from 'core/util/data';
import id from 'core/util/itemID';


export default function jobs(state, action) {
    //console.log(state);
    //index = state.findIndex(todo => action.id === todo.get('id'));
    if (action.type === actions.JOBS_RETRIEVE) {
        let transformed = Object.keys(action.data).map((key) => (
            {
                id: key,
                jobName: action.data[key].jobName
            }
        ))
        
        return state.concat(fromJS(transformed));
    }

    //PLACEHOLDER
    if (action.type === actions.JOBS_DUMP) {
        state = List([]);
        
        return state;
    }

    if (action.type === actions.JOBS_ADD) {

        return state.push(Map({
            id : action.id,
            jobName : action.job.job
        }))

    }

    if (action.type === actions.JOBS_DELETE) {
        return state.delete(action.job);
    }


    return state;
}

