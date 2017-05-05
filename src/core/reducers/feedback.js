import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';


export default function feedback(state, action) {
    //console.log(state);
    //index = state.findIndex(todo => action.id === todo.get('id'));
    if (action.type === actions.FEEDBACK_CHANGE) {
        //console.log(index);
        return state.setIn([action.index, action.item], action.value);
    }

    if (action.type === actions.FEEDBACK_RETRIEVE) {
        //console.log(index);

            let transformed = data().feedback.map(feedback => ({
                id : id(),
                jobId : feedback.jobId ,
                feedback : feedback.feedback,
                assignedTo : feedback.assignedTo,
                assignedBy : feedback.assignedBy,
                completed : feedback.completed,
                approved : feedback.approved 
            }));
            
            let feedbackObject = fromJS(transformed);
            let feedback = List([]);
            feedbackObject.forEach(function(obj) {

                if(obj.get('jobId') == action.id) {
                    feedback = feedback.push(obj);
                }
            });
            console.log(feedback);

       return state.concat(feedback);
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

    if (action.type === actions.FEEDBACK_DELETE) {
        return state.delete(action.item);
    }

    if (action.type === actions.FEEDBACK_DUMP) {

        state = List([]);
        return state;

    }

    return state;
}