
import React, { PropTypes, Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Logo from 'core/components/appbar/logo'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'core/actions';



export class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        
    } 

  logout() {
      this.props.dispatch(actions.userLogout());
  }

  render() {
    return (
        <IconMenu
        iconButtonElement={<IconButton><Logo /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            <MenuItem primaryText="Logout" onTouchTap={this.logout} />
        </IconMenu>
    );
  }

}

export default connect(state => state)(SideMenu);


