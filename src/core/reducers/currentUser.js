import * as actions from 'core/actions';
import {fromJS, Map, List} from 'immutable';
import id from 'core/util/itemID';
import data from 'core/util/data';
const electron = window.require('electron').remote.app;


export default function currentUser(state, action) {

    if (action.type === actions.USER_AUTHORIZE) {

        let userObject = fromJS(action.user);
        return state = userObject;

        
    }

    if (action.type === actions.USER_LOGOUT) {

        return state.clear();

        
    }

    if (action.type === actions.USER_NOTIFY_FEEDBACK) {
        if (window.location.pathname.indexOf('/job/') === -1 || !document.hasFocus()) {
            let count = electron.getBadgeCount();
            count++;
            electron.setBadgeCount(count);
            let newFeedbackNotification = new Notification('New feedback', {
                body: action.payload.refferer + ' assigned some feedback to you.'
            })
        }
        return state;
    }

    return state;
}