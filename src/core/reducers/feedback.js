import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';


export default function feedback(state, action) {
    //console.log(state);
    //index = state.findIndex(todo => action.id === todo.get('id'));
    if (action.type === actions.FEEDBACK_CHANGE) {
        //console.log(index);
        return state.setIn([action.index, action.item], action.value);
    }

    if (action.type === actions.FEEDBACK_ADD) {

        return state.push(Map({
            id : id(),
            jobId : "1",
            feedback : action.item.feedBack,
            assignedTo : action.item.assignTo,
            assignedBy : 'user-1',
            completed : false,
            approved : false
        }))

    }

    return state;
}