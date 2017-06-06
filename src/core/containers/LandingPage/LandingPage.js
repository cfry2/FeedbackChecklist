import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckList from 'core/components/checklist/CheckList';
import { Link } from 'react-router-dom';
import AddItem from 'core/components/checklist/AddItem';
//import styles from './LandingPage.scss';
//import withStyles from '../../common/decorators/withStyles';

import * as actions from 'core/actions';

export class LandingPage extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.addItem = this.addItem.bind(this);
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
  }

  componentWillUnmount() {
      this.props.dispatch(actions.feedbackDump());
  }

  render() {
    return (
      
      <div className='LandingPage'>
          <div><Link to="/">return</Link></div>
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
          />
      </div>
    );
  }

}

export default connect(state => state)(LandingPage);
