import React, { PropTypes, Component } from 'react';
import {List} from 'immutable';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';


export default class Item extends Component {

/*static contextTypes = {
onSetTitle: PropTypes.func.isRequired
};*/


render() {
    return (
        <TableRow>
            <TableRowColumn>
                <TextField
                    name="job"
                    id="checklist__item__feedback"
                    value={this.props.feedback}
                    hintText="Feedback"
                    onChange={(e)=>this.props.onChange(this.props.id, this.props.jobId , this.props.index, 'feedback', e.target.value)}
                />
            </TableRowColumn>
            <TableRowColumn>
                <SelectField
                    name="assignedTo"
                    value={this.props.assignedTo}
                    onChange={(e, key, payload)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, 'assignedTo', payload)}
                >
                    {
                        this.props.users.map((user, index) => (
                            <MenuItem key={index} value={user.get('name')} primaryText={user.get('name')} />  
                        ))
                    }
                </SelectField>
            </TableRowColumn>
            <TableRowColumn>
                <SelectField
                    name="assignedBy"
                    value={this.props.assignedBy}
                    onChange={(e, key, payload)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, 'assignedBy', payload)}
                >
                    {
                        this.props.users.map((user, index) => (
                            <MenuItem key={index} value={user.get('name')} primaryText={user.get('name')} />  
                        ))
                    }
                </SelectField>
            </TableRowColumn>
            <TableRowColumn>
                <Checkbox
                    checked={this.props.completed == true ? true : false}
                    id="checklist__item__completed"
                    onCheck={(e, checked)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, 'completed', checked)}
                />
            </TableRowColumn>
            <TableRowColumn>
                <Checkbox
                    checked={this.props.approved == true ? true : false}
                    id="checklist__item__approved"
                    onCheck={(e, checked)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, 'approved', checked)}
                />
            </TableRowColumn>
            <TableRowColumn>
                <FlatButton label="Delete" onTouchTap={(e)=>this.props.onDelete(this.props.index, this.props.id, this.props.jobId)} primary={true} />
            </TableRowColumn>
        </TableRow>
        );
    }

}
