import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';


export default function users(state, action) {

    if (action.type === actions.GET_USERS) {
        state = state.clear();
        let transformed = Object.keys(action.data).map((key) => (
            {
                id: key,
                name: action.data[key].name
            }
        ))
        var usersObject = fromJS(transformed);
        if (action.newUser != null) {
            usersObject = usersObject.push(fromJS(action.newUser))
        }
        
        return state.concat(usersObject);
    }

    return state;

}