
import React, { PropTypes, Component } from 'react';
import CheckListItem from 'core/components/checklist/CheckListItem';
//import {List} from 'immutable';


export default class CheckList extends Component {

    render() {
        let title = 'React Redux Boilerplate';
        //this.context.onSetTitle(title);
        console.log(this.props.feedback);
        return (
            <div className="checklist">
                <ul className="checklist__items">
                    {
                        this.props.feedback.map((feedback, index) => (
                            <li key={feedback.get('id')}>
                                <CheckListItem
                                    index={index}
                                    id={feedback.get('id')}
                                    jobId={feedback.get('jobId')}
                                    feedback={feedback.get('feedback')}
                                    assignedTo={feedback.get('assignedTo')}
                                    assignedBy={feedback.get('assignedBy')}
                                    completed={feedback.get('completed')}
                                    approved={feedback.get('approved')}
                                    onChange={this.props.onChange}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

}



