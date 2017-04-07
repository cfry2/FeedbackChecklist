import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, Switch } from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Page from 'core/containers/page'
import LandingPage from 'core/containers/LandingPage/LandingPage'
//import reducers here
import reducers , {initialState} from 'core/reducers/index';


export default class App {
    constructor() {
        this.element = document.getElementById('app');
        this.reducers = reducers;
        this.store = this.setUpStore();
        this.history = syncHistoryWithStore(createBrowserHistory(), this.store);
        this.render();
        //this.store.dispatch(actions.requestData());
    }

    setUpStore() {
        return createStore(this.reducers, initialState, compose(applyMiddleware(thunk)));
    }

    render() {
        ReactDOM.render(
            <div>
                 <Provider store={this.store}>
                    <Router history={this.history}>
                        <Route exact path="/" component={LandingPage}/>
                    </Router>
                </Provider>
                Content below
            </div>, this.element
        );
    }
}

