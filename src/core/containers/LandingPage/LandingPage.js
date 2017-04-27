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

  constructor(props) {
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
    } 
  handleComplete(event) {
    console.log(event);
  }

  render() {
    let title = 'React Redux Boilerplate';
    //this.context.onSetTitle(title);
    console.log(this.props);
    return (
      <div className='LandingPage'>
          <CheckList 
            feedback={this.props.feedback}
            onChange={this.handleComplete}
          />
          <AddItem />
      </div>
    );
  }

}

export default connect(state => state)(LandingPage);
