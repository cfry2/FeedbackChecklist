import { routerReducer } from 'react-router-redux';
import feedback from 'core/reducers/feedback';
import jobs from 'core/reducers/jobs';
import users from 'core/reducers/users';
import title from 'core/reducers/title';
import userNotifications from 'core/reducers/notifications';
import currentUser from 'core/reducers/currentUser';
import { List , fromJS, Map} from 'immutable';
import id from 'core/util/itemID';

export const initialState = {
    jobs : List([]),
    feedback : List([]),
    currentUser : Map(),
    users : List([]),
    title : '',
    userNotifications : List([])

};

export default function reducer(state = initialState, action) {
    return {
        routing : routerReducer(state.routing, action),
        jobs : jobs(state.jobs, action),
        feedback: feedback(state.feedback, action),
        currentUser : currentUser(state.currentUser, action),
        users : users(state.users, action),
        title : title(state.title, action),
        userNotifications : userNotifications(state.userNotifications, action)
    }
}