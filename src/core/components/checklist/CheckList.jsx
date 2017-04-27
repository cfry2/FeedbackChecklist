
import React, { PropTypes, Component } from 'react';
import CheckListItem from 'core/components/checklist/CheckListItem';
//import {List} from 'immutable';


export default class CheckList extends Component {

    render() {
        let title = 'React Redux Boilerplate';
        //this.context.onSetTitle(title);
        console.log(this.props);
        return (
            <div className="checklist">
                <ul className="checklist__items">
                    {
                        this.props.feedback.map(feedback => (
                            <CheckListItem 
                                key={feedback.id}
                                id={feedback.id}
                                jobId={feedback.jobId}
                                feedback={feedback.feedback}
                                assignedTo={feedback.assignedTo}
                                assignedBy={feedback.assignedBy}
                                completed={feedback.completed}
                                approved={feedback.approved}
                                onChange={this.props.onChange}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }

}



