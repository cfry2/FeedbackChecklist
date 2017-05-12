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
    } 

  componentWillMount() {
      this.props.dispatch(actions.jobsRetrieve());
      
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

  render() {
    let title = 'React Redux Boilerplate';
    //this.context.onSetTitle(title);
    console.log(this.props);
    return (
        
      <div className='JobsPage'>
        {this.props.currentUser == undefined ? (
            <div className="JobsPage__inner">
                <p>Your are not logged in</p>
            </div>
        ) : 

            <div className="JobsPage__inner">
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
