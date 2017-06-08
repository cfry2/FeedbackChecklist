import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';

import data from 'core/util/data';
import id from 'core/util/itemID';

export default function title(state, action) {

    if (action.type === actions.UPDATE_TITLE) {
        state = action.data;
        return state;
    }
    return state
}