
import React, { PropTypes, Component } from 'react';
//import {List} from 'immutable';


export default class AddItem extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  render() {
    let title = 'React Redux Boilerplate';
    //this.context.onSetTitle(title);

    return (
        <div className="additem">
            <div className="additem__inputs">
                <input name="feedback-text" type="text" placeholder="assign some feedback" />
                <select name="select" defaultValue="person-2">
                    <option value="person-1">Person-1</option> 
                    <option value="person-2"> Person-2</option>
                    <option value="person-3">Person-3</option>
                </select>
                <button>Add</button>
            </div>
        </div>
    );
  }

}



