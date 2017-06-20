import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';


export default function feedback(state, action) {
    if (action.type === actions.FEEDBACK_CHANGE) {
        return state;
    }

    if (action.type === actions.FEEDBACK_UPDATE) {
        state = state.clear();
        if (action.data == null || action.data == undefined) {
            return state;
        }
        else {
            let feedbackObject = fromJS(action.data);

            return state.concat(feedbackObject);
        }

    }

    if (action.type === actions.FEEDBACK_ADD) {

        return state;

    }

    if (action.type === actions.FEEDBACK_DELETE) {
        return state;
    }

    if (action.type === actions.FEEDBACK_DUMP) {
        return state.clear();

    }

    return state;
}