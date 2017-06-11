
import React, { PropTypes, Component } from 'react';
import Item from 'core/components/checklist/Item';
//import {List} from 'immutable';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

export default class CheckList extends Component {

    render() {
        return (
            <div className="checklist">
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Feedback</TableHeaderColumn>
                            <TableHeaderColumn>Assigned To</TableHeaderColumn>
                            <TableHeaderColumn>Assigned By</TableHeaderColumn>
                            <TableHeaderColumn>Completed</TableHeaderColumn>
                            <TableHeaderColumn>Approved</TableHeaderColumn>
                            <TableHeaderColumn>Delete</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.props.feedback.map((feedback, index) => (
                                    <Item
                                        key={feedback.get('id')}
                                        index={index}
                                        id={feedback.get('id')}
                                        jobId={feedback.get('jobId')}
                                        feedback={feedback.get('feedback')}
                                        assignedTo={feedback.get('assignedTo')}
                                        assignedBy={feedback.get('assignedBy')}
                                        completed={feedback.get('completed')}
                                        approved={feedback.get('approved')}
                                        onChange={this.props.onChange}
                                        onDelete={this.props.onDelete}
                                        users={this.props.users}
                                    />
                            ))
                        }
                        
                    </TableBody>
                </Table>
            </div>
        );
    }

}



