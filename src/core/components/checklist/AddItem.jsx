
import React, { PropTypes, Component } from 'react';
//import {List} from 'immutable';


export default class AddItem extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  render() {

    return (
        <div className="additem">
            <form className="additem__inputs" 
            onSubmit={
                (e) => {
                    e.preventDefault();
                    console.log(this.props);
                    this.props.onAdd(
                        {
                            "feedBack" : e.target.elements.feedback.value,
                            "assignTo" : e.target.elements.select.value,
                            "jobId" : this.props.jobId
                        }
                    );
                    e.target.elements.feedback.value = '';
                    e.target.elements.select.value = '';
                }
            }>
                <input name="feedback" type="text" placeholder="assign some feedback" />
                <select name="select" defaultValue="person-2">
                    <option value="person-1">Person-1</option> 
                    <option value="person-2"> Person-2</option>
                    <option value="person-3">Person-3</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    );
  }

}



