import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';


export default function feedback(state, action) {
    //console.log(state);
    //index = state.findIndex(todo => action.id === todo.get('id'));
    if (action.type === actions.FEEDBACK_CHANGE) {
        //console.log(index);
        return state.setIn([action.index, action.item], action.value);
    }

    return state;
}