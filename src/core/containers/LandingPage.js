import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckList from 'core/components/checklist/CheckList';
import { Link, Redirect } from 'react-router-dom';
import AddItem from 'core/components/checklist/AddItem';
import UnAuth from 'core/containers/unAuthPage';
const electron = window.require('electron').remote.app;

import * as actions from 'core/actions';

export class LandingPage extends Component {


  constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.addItem = this.addItem.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.removeUserNotifications = this.removeUserNotifications.bind(this);
    } 
  handleChange(id, jobId, index, item, value) {
    this.props.dispatch(actions.feedbackChange(id, jobId, index, item, value));
  }

  handleDelete(index, id, jobId) {
    this.props.dispatch(actions.feedbackDelete(index, id, jobId));
  }

  addItem(item) {
    this.props.dispatch(actions.feedbackAdd(item));
  }

  removeUserNotifications() {
          this.props.dispatch(actions.removeUserNotifications(this.props.match.params.jobId, this.props.currentUser.get('id')));
  }

  componentWillMount() {
    
      this.props.dispatch(actions.hookFeedBackListener(this.props.match.params.jobId));
      this.removeUserNotifications();
      this.updateTitle();

  }
  
  updateTitle() {
      var newTitle;
      this.props.jobs.forEach((map) => {
        var result = map.includes(this.props.match.params.jobId);
        if (result) {
          newTitle = map.get('jobName');
        }
      });
      this.props.dispatch(actions.updateTitle('Feedback Checklist / ' + newTitle));
  }

  componentWillUnmount() {
      this.props.dispatch(actions.feedbackDump());
  }

  getUsers() {
    this.props.dispatch(actions.getUsers());
  }

  authenticateUser() {
    this.props.dispatch(actions.userAuthorize())
        .then((data) => {
            this.getUsers();
        });
  }


  render() {
    return (
      <div className='LandingPage' onClick={this.removeUserNotifications}>
        {!this.props.currentUser.has('id') ? <Redirect to="/" /> : 
        <div className="LandingPage__inner">
          <CheckList 
            feedback={this.props.feedback}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
            users={this.props.users}
          />
          <AddItem
            onAdd={this.addItem}
            jobId={this.props.match.params.jobId}
            users={this.props.users}
            currentUser={this.props.currentUser}
            assignTo="assign to as user"
          />
        </div>
      
        }
        </div>
    );
  }

}

export default connect(state => state)(LandingPage);
