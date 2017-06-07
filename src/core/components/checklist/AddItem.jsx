
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
            'assignTo' : ''
        };
    }
  render() {
    return (
        <div className="additem">
            <form className="additem__inputs" 
            onSubmit={
                (e) => {
                    e.preventDefault();
                    console.log(e.target.elements);
                    this.props.onAdd(
                        {
                            "feedBack" : e.target.elements.feedback.value,
                            "assignTo" : this.assignTo,
                            "assignBy" : this.props.currentUser.get('name'),
                            "jobId" : this.props.jobId
                        }
                    );
                    e.target.elements.feedback.value = '';
                    e.target.elements.select.value = '';
                }
            }>
                <Toolbar>
                    <ToolbarGroup>
                            <TextField
                                name="feedback"
                                hintText="assign some feedback"
                            />
                            <SelectField
                                name="select"
                                id="selects"
                                value={this.assignTo}
                                onChange={(e, key, payload)=>{this.setState({'assignTo' : payload})}}
                            >
                                {
                                    this.props.users.map((user, index) => (
                                        <MenuItem key={index} value={user.get('name')} primaryText={user.get('name')} />      
                                    ))
                                }
                            </SelectField>
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



