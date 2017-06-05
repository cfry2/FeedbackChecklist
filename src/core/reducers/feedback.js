import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';


export default function feedback(state, action) {
    if (action.type === actions.FEEDBACK_CHANGE) {
        return state;
    }

    if (action.type === actions.FEEDBACK_RETRIEVE) {
        state = state.clear();
        let transformed = action.data.map(feedback => ({
            id : feedback.id,
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

        return state;

    }

    if (action.type === actions.FEEDBACK_DELETE) {
        return state.delete(action.item);
    }

    if (action.type === actions.FEEDBACK_DUMP) {
        return state.clear();

    }

    return state;
}