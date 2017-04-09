import React, { PropTypes, Component } from 'react';
import checkListItem from 'core/components/checklist/checkListItem';
//import {List} from 'immutable';


export default class CheckLisItem extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  render() {
    let title = 'React Redux Boilerplate';
    //this.context.onSetTitle(title);

    return (
        <div className="checklist__item__inner">
            <span>Item name</span>
            <span>assigned</span>
            <span>assignee</span>
            <input type="checkbox" id="checklist__item__completed" value="completed" />
            <input type="checkbox" id="checklist__item__approved" value="approved" />
        </div>
    );
  }

}
