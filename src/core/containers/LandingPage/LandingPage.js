import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckList from 'core/components/checklist/CheckList';
import AddItem from 'core/components/checklist/AddItem';
//import styles from './LandingPage.scss';
//import withStyles from '../../common/decorators/withStyles';

export class LandingPage extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  render() {
    let title = 'React Redux Boilerplate';
    //this.context.onSetTitle(title);

    return (
      <div className='LandingPage'>
          <CheckList />
          <AddItem />
      </div>
    );
  }

}

export default connect(state => state)(LandingPage);
