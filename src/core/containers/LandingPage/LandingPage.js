import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckList from 'core/components/checklist/CheckList';
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
    } 
  handleChange(index, item, value) {
    this.props.dispatch(actions.feedbackChange(index, item, value));
  }

  render() {
    let title = 'React Redux Boilerplate';
    //this.context.onSetTitle(title);
    return (
      <div className='LandingPage'>
          <CheckList 
            feedback={this.props.feedback}
            onChange={this.handleChange}
          />
          <AddItem />
      </div>
    );
  }

}

export default connect(state => state)(LandingPage);
