import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckList from 'core/components/checklist/CheckList';
import AddJob from 'core/components/jobs/AddJob';
//import styles from './LandingPage.scss';
//import withStyles from '../../common/decorators/withStyles';

import * as actions from 'core/actions';

export class JobsPage extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  constructor(props) {
        super(props);
        this.addJob = this.addJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.logout = this.logout.bind(this);
        this.getUsers = this.getUsers.bind(this);
        
    } 

  componentWillMount() {
      this.props.dispatch(actions.jobsRetrieve());
      //this.props.dispatch(actions.userAuthorize());
      this.authenticateUser();
      
  }

  getUsers() {
    this.props.dispatch(actions.getUsers());
  }

  componentWillUnmount() {
      //PLACEHOLDER
      this.props.dispatch(actions.jobsDump());
  }

  addJob(job) {
      this.props.dispatch(actions.jobsAdd(job));
  }

  deleteJob(job) {
      this.props.dispatch(actions.jobsDelete(job));
  }

  authenticateUser() {
    this.props.dispatch(actions.userAuthorize())
        .then((data) => {
            this.getUsers();
        });
  }
  logout() {
      this.props.dispatch(actions.userLogout());
  }

  render() {
    return (
        
      <div className='JobsPage'>
        {!this.props.currentUser.has('id') ? (
            <div className="JobsPage__inner">
                <p>Your are not logged in. <a href="#" onClick={this.authenticateUser}>Log in now</a></p>          
            </div>
        ) : 

            <div className="JobsPage__inner">
                <a href="#" onClick={this.logout}>Logout</a>
                <ul>
                    {
                        this.props.jobs.map((job, index) => (
                            <li key={job.get('id')}>
                                <Link to={'/job/'+job.get('id')}>{job.get('jobName')}</Link> | 
                                <a href="#" onClick={(e)=>this.deleteJob(job.get('id'))}> Delete</a>
                            </li>
                        ))
                    }
                </ul>
                <AddJob
                    onAdd={this.addJob}
                />
            </div>
        }
      </div>
    );
  }

}

export default connect(state => state)(JobsPage);
