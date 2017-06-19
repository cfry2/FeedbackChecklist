import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckList from 'core/components/checklist/CheckList';
import { Link } from 'react-router-dom';
import AddItem from 'core/components/checklist/AddItem';
import FlatButton from 'material-ui/FlatButton';

import * as actions from 'core/actions';

export class unAuthPage extends Component {

  constructor(props) {
        super(props);
    } 


  render() {

    return (
        <div className="UnAuth-section">
            <span>Your are not logged in</span>
            <span><FlatButton label="Log in now" onTouchTap={this.props.authenticateUser} /></span>          
        </div>
    );
  }

}

export default connect(state => state)(unAuthPage);
