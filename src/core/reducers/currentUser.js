import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';


export default function currentUser(state, action) {

    if (action.type === actions.USER_AUTHORIZE) {
        let userObject = fromJS(action.user);
        return state = userObject;

        
    }
}