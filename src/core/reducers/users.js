import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';


export default function users(state, action) {

    if (action.type === actions.GET_USERS) {

        let transformed = Object.keys(action.data).map((key) => (
            {
                id: key,
                name: action.data[key]
            }
        ))
        
        return state.concat(fromJS(transformed));
    }

    return state;

}