import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Switch } from 'react-router';
import { Link, BrowserRouter as Router, Route, hashHistory, Redirect} from 'react-router-dom';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from 'core/actions';
import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import sass from 'styles/partials/_settings';



//import Page from 'core/containers/page'
import LandingPage from 'core/containers/LandingPage';
import JobsPage from 'core/containers/JobsPage';
import SideMenu from 'core/components/appbar/SideMenu';
import Title from 'core/components/appbar/title';
//import reducers here
import reducers , {initialState} from 'core/reducers/index';


export default class App {
    constructor() {
        this.element = document.getElementById('app');
        document.title = 'Feedback Checklist';
        this.reducers = reducers;
        this.fbConfig = this.initializeFirebase();
        this.store = this.setUpStore();
        this.theme = this.setUpTheme();
        this.history = syncHistoryWithStore(createBrowserHistory(), this.store);
        //this.history = hashHistory
        injectTapEventPlugin();
        
        this.render();
        
    }

    setUpStore() {
        return createStore(this.reducers, initialState, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(getFirebase)), reactReduxFirebase(this.fbConfig)));
    }

    setUpTheme() {
        return getMuiTheme({
            fontFamily: sass.avenir,
            palette: {
                textColor: sass.bodyFontColor,
                primary1Color: sass.viGreen,
                accent1Color: sass.viPink
            }
        })
    }

    initializeFirebase() {
        return {
            apiKey: process.env.API_KEY,
            authDomain: "feedbackchecklist.firebaseapp.com",
            databaseURL: "https://feedbackchecklist.firebaseio.com",
            projectId: "feedbackchecklist",
            storageBucket: "feedbackchecklist.appspot.com",
            messagingSenderId: "665189860934"
        };
    }

    render() {
        ReactDOM.render(
            <MuiThemeProvider muiTheme={this.theme}>
                 <Provider store={this.store}>
                    <Router history={this.history}>
                        <div>
                            <AppBar
                                title={<Title />}
                                style={{
                                    backgroundColor: sass.viPurple
                                }}
                                showMenuIconButton={false}
                                iconElementRight={<SideMenu />}
                            />
                            {window.location.pathname.includes('index.html') && <Redirect to="/" />}
                            <Route exact path="/" component={JobsPage}/>
                            <Route path="/job/:jobId" component={LandingPage}/>
                        </div>
                    </Router>
                </Provider>
           </MuiThemeProvider>, this.element
        );
    }
}

