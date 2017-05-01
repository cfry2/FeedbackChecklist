import { routerReducer } from 'react-router-redux';
import feedback from 'core/reducers/feedback';
import { List , fromJS} from 'immutable';

export const initialState = {
    jobs : [
        {
            id : 1,
            jobName : "rea16245"
        }
    ],
    feedback : fromJS([
        {
            id : 1,
            jobId : 1,
            feedback : "fix padding",
            assignedTo : "user-1",
            assignedBy : "user-2",
            completed : false,
            approved : true
        },
        {
            id : 2,
            jobId : 1,
            feedback : "fix button alignment",
            assignedTo : "user-1",
            assignedBy : "user-2",
            completed : true,
            approved : false
        }
    ])

};

export default function reducer(state = initialState, action) {
    return {
        routing : routerReducer(state.routing, action),
        jobs : state.jobs,
        feedback: feedback(state.feedback, action)
    }
}