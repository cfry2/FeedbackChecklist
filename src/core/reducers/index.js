import { routerReducer } from 'react-router-redux';
import feedback from 'core/reducers/feedback';
import jobs from 'core/reducers/jobs';
import { List , fromJS, Map} from 'immutable';
import id from 'core/util/itemID';

export const initialState = {
    jobs : List([]),
    feedback : List([])

};

export default function reducer(state = initialState, action) {
    return {
        routing : routerReducer(state.routing, action),
        jobs : jobs(state.jobs, action),
        feedback: feedback(state.feedback, action)
    }
}