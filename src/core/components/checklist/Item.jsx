import React, { PropTypes, Component } from 'react';
import {List} from 'immutable';


export default class Item extends Component {

  /*static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/


  render() {
    return (
        <div className="checklist__item__inner">
          <input
            type="text"
            id="checklist__item__feedback"
            value={this.props.feedback}
            onChange={(e)=>this.props.onChange(this.props.id, this.props.jobId , this.props.index, 'feedback', e.target.value)}
            />
          <select name="assignedTo" value={this.props.assignedTo} onChange={(e)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, e.target.name, e.target.value)}>
            {
                this.props.users.map((user, index) => (
                    <option key={index} value={user.get('name')}>{user.get('name')}</option>      
                ))
            }
          </select>
          <select name="assignedBy" value={this.props.assignedBy} onChange={(e)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, e.target.name, e.target.value)}>
            {
                this.props.users.map((user, index) => (
                    <option key={index} value={user.get('name')}>{user.get('name')}</option>      
                ))
            }
          </select>
          <input 
            type="checkbox" 
            id="checklist__item__completed"
            checked={this.props.completed == true ? 'checked' : ''}
            value="completed"
            onChange={(e)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, e.target.value, e.target.checked)}
          
          />
          <input 
            type="checkbox" 
            id="checklist__item__approved"
            checked={this.props.approved == true ? 'checked' : ''}
            value="approved"
            onChange={(e)=>this.props.onChange(this.props.id, this.props.jobId, this.props.index, e.target.value, e.target.checked)}
          
          />
          <a href="#"
            onClick={(e)=>this.props.onDelete(this.props.index, this.props.id, this.props.jobId)}
          >
            Remove
          </a>
        </div>
    );
  }

}
