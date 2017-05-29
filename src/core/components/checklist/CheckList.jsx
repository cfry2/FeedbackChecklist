
import React, { PropTypes, Component } from 'react';
import Item from 'core/components/checklist/Item';
//import {List} from 'immutable';


export default class CheckList extends Component {

    render() {
        return (
            <div className="checklist">
                <ul className="checklist__items">
                    {
                        this.props.feedback.map((feedback, index) => (
                            <li key={feedback.get('id')}>
                                <Item
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
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

}



