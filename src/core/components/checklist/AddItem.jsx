
import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'assignTo' : this.props.currentUser.get('name'),
            'userId' : this.props.currentUser.get('id')
        };

    }
  render() {
    return (
        <div className="additem">
            <form className="additem__inputs" 
            onSubmit={
                (e) => {
                    e.preventDefault();
                    this.props.onAdd(
                        {
                            "feedBack" : e.target.elements.feedback.value,
                            "assignTo" : this.state.assignTo,
                            "assignBy" : this.props.currentUser.get('name'),
                            "jobId" : this.props.jobId,
                            "userId" : this.state.userId,
                            "notificationType" : "FEEDBACK_ADD"
                        }
                    );
                    e.target.elements.feedback.value = '';
                }
            }>
                <Toolbar>
                    <ToolbarGroup>
                            <TextField
                                name="feedback"
                                hintText="Assign Some Feedback"
                            />
                            <SelectField
                                name="select"
                                id="select"
                                value={this.state.assignTo}
                                onChange={(e, key, payload) => {
                                    this.setState({assignTo : payload.name}); 
                                    this.setState({userId : payload.userId});
                                    }}
                            >
                                {
                                    this.props.users.map((user, index) => (
                                        <MenuItem key={index} value={{'name' : user.get('name'), 'userId' : user.get('id')}} primaryText={user.get('name')} />      
                                    ))
                                }
                            </SelectField>
                            <ToolbarSeparator />
                            <RaisedButton type="submit" label="Add Feedback" primary={true} />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <FlatButton label="Return" containerElement={<Link to="/"/>} primary={true} />
                    </ToolbarGroup>
                </Toolbar>
            </form>
        </div>
    );
  }

}



