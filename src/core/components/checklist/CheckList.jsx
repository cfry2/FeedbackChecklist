
import React, { PropTypes, Component } from 'react';
import CheckListItem from 'core/components/checklist/CheckListItem';
//import {List} from 'immutable';


export default class CheckList extends Component {

    render() {
        let title = 'React Redux Boilerplate';
        //this.context.onSetTitle(title);

        return (
            <div className="checklist">
                <ul className="checklist__items">
                    <li className="checklist__item"><CheckListItem /></li>
                </ul>
            </div>
        );
    }

}



