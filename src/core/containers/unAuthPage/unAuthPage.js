import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckList from 'core/components/checklist/CheckList';
import { Link } from 'react-router-dom';
import AddItem from 'core/components/checklist/AddItem';
//import styles from './LandingPage.scss';
//import withStyles from '../../common/decorators/withStyles';

import * as actions from 'core/actions';

export class unAuthPage extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  constructor(props) {
        super(props);
    } 

  render() {

    return (
      <div className='unAuthPage'>
          <p>Your are not logged in</p>
      </div>
    );
  }

}

export default connect(state => state)(unAuthPage);
