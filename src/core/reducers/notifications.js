import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
const electron = window.require('electron').remote.app;

export default function userNotifications(state, action) {
    var badgeCount = state.size;
    electron.setBadgeCount(badgeCount);

    if (action.type === actions.USER_NOTIFICATIONS_UPDATE) {
        state = state.clear();
        let userNotificationsObject = fromJS(action.payload);
        userNotificationsObject = userNotificationsObject.set('key', action.key);    
        return state.push(userNotificationsObject);
    }

    if (action.type === actions.USER_NOTIFICATIONS_REMOVE) {
        console.log(action.key);
        state = state.filterNot((notification) => notification.get('job') === action.key);
        return state;
    }


    if (action.type === actions.USER_NOTIFICATIONS_FEEDBACK_ADD) {
        if (window.location.pathname.indexOf('/job/' + action.payload.job) === -1 || !document.hasFocus()) {
            let userNotificationsObject = fromJS(action.payload);
            userNotificationsObject = userNotificationsObject.set('key', action.key);
            let newFeedbackNotification = new Notification('New feedback', {
                body: action.payload.refferer + ' assigned some feedback to you.'
            })
            return state.push(userNotificationsObject);
        }
        return state;
    }

    return state;

}