import { routerReducer } from 'react-router-redux';
import feedback from 'core/reducers/feedback';
import jobs from 'core/reducers/jobs';
import users from 'core/reducers/users';
import currentUser from 'core/reducers/currentUser';
import { List , fromJS, Map} from 'immutable';
import id from 'core/util/itemID';

export const initialState = {
    jobs : List([]),
    feedback : List([]),
    users : List([]),
    currentUser : Map()

};

export default function reducer(state = initialState, action) {
    return {
        routing : routerReducer(state.routing, action),
        jobs : jobs(state.jobs, action),
        feedback: feedback(state.feedback, action),
        users : users(state.users, action),
        currentUser : currentUser(state.currentUser, action)
    }
}