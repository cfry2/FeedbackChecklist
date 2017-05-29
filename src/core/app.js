import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Switch} from 'react-router';
import { Link, BrowserRouter as Router, Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from 'core/actions';
import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase';

//import Page from 'core/containers/page'
import LandingPage from 'core/containers/LandingPage/LandingPage'
import JobsPage from 'core/containers/JobsPage/JobsPage'
import unAuthPage from 'core/containers/unAuthPage/unAuthPage'
//import reducers here
import reducers , {initialState} from 'core/reducers/index';


export default class App {
    constructor() {
        this.element = document.getElementById('app');
        this.reducers = reducers;
        this.fbConfig = this.initializeFirebase();
        this.store = this.setUpStore();
        this.store.dispatch(actions.userAuthorize());
        this.history = syncHistoryWithStore(createBrowserHistory(), this.store);
        this.render();
        
    }

    setUpStore() {
        
        return createStore(this.reducers, initialState, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(getFirebase)), reactReduxFirebase(this.fbConfig)));
    }

    initializeFirebase() {
        return {
            apiKey: "AIzaSyCljOquZBIV6I2of8WC0IBv--FiO4NTeuE",
            authDomain: "feedbackchecklist.firebaseapp.com",
            databaseURL: "https://feedbackchecklist.firebaseio.com",
            projectId: "feedbackchecklist",
            storageBucket: "feedbackchecklist.appspot.com",
            messagingSenderId: "665189860934"
        };
    }

    render() {
        ReactDOM.render(
            <div>
                 <Provider store={this.store}>
                    <Router history={this.history}>
                        
                        <div>
                            <Route exact path="/" component={JobsPage}/>
                            <Route path="/job/:jobId" component={LandingPage}/>
                        </div>
                    </Router>
                </Provider>
            </div>, this.element
        );
    }
}

