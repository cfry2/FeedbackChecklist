
import React, { PropTypes, Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'core/actions';

import ReactSVG from 'react-svg';



export class Logo extends Component {

    constructor(props) {
        super(props);
       
        
    } 


  render() {
    return (
        <ReactSVG
            path="src/assets/logo.svg"
            className="example"
        />
    );
  } 

}

export default connect(state => state)(Logo);


