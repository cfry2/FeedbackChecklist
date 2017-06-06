
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
                    this.props.onAdd(
                        {
                            "feedBack" : e.target.elements.feedback.value,
                            "assignTo" : e.target.elements.select.value,
                            "assignBy" : this.props.currentUser.get('name'),
                            "jobId" : this.props.jobId
                        }
                    );
                    e.target.elements.feedback.value = '';
                    e.target.elements.select.value = '';
                }
            }>
                <input name="feedback" type="text" placeholder="assign some feedback" />
                <select name="select" placeholder="Assign it to..">
                    {
                        this.props.users.map((user, index) => (
                            <option key={index} value={user.get('name')}>{user.get('name')}</option>      
                        ))
                    }
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    );
  }

}



