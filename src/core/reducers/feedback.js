import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';


export default function feedback(state, action) {
    if (action.type === actions.FEEDBACK_CHANGE) {
        return state.setIn([action.index, action.item], action.value);
    }

    if (action.type === actions.FEEDBACK_RETRIEVE) {

        let transformed = action.data.map(feedback => ({
            id : id(),
            jobId : feedback.jobId ,
            feedback : feedback.feedback,
            assignedTo : feedback.assignedTo,
            assignedBy : feedback.assignedBy,
            completed : feedback.completed,
            approved : feedback.approved 
        }));
        let feedbackObject = fromJS(transformed);

       return state.concat(feedbackObject);
    }

    if (action.type === actions.FEEDBACK_ADD) {

        return state.push(fromJS(action.feedback));

    }

    if (action.type === actions.FEEDBACK_DELETE) {
        return state.delete(action.item);
    }

    if (action.type === actions.FEEDBACK_DUMP) {
        return state.clear();

    }

    return state;
}