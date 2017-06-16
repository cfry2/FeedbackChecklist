import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckList from 'core/components/checklist/CheckList';
import { Link } from 'react-router-dom';
import AddItem from 'core/components/checklist/AddItem';
import UnAuth from 'core/containers/unAuthPage/unAuthPage';

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

  componentWillMount() {
      this.props.dispatch(actions.feedbackRetrieve(this.props.match.params.jobId));
      this.props.dispatch(actions.notifyNewFeedback(this.props.currentUser.get('name'), this.props.match.params.jobId));
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
      <div className='LandingPage'>
        {!this.props.currentUser.has('id') ? window.location = '/' : 
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
