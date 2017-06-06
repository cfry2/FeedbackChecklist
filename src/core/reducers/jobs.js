import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';

import data from 'core/util/data';
import id from 'core/util/itemID';


export default function jobs(state, action) {

    if (action.type === actions.JOBS_RETRIEVE) {
        state = state.clear();
        if (action.data == null || action.data == undefined) {
            return state;
        }
        else {
            let transformed = Object.keys(action.data).map((key) => (
                {
                    id: key,
                    jobName: action.data[key].jobName
                }
            ))
            return state.concat(fromJS(transformed));
        }

        

    }

    if (action.type === actions.JOBS_DUMP) {
        return state.clear();
    }

    if (action.type === actions.JOBS_ADD) {
        return state;

    }

    if (action.type === actions.JOBS_DELETE) {
        return state
        
    }


    return state;
}

