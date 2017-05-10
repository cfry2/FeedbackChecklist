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
            defaultValue={this.props.feedback}
            onChange={(e)=>this.props.onChange(this.props.id, this.props.index, 'feedback', e.target.value)}
            />
          <select name="assignedTo" defaultValue={this.props.assignedTo} onChange={(e)=>this.props.onChange(this.props.id,this.props.index, e.target.name, e.target.value)}>
              <option value={this.props.assignedTo}>{this.props.assignedTo}</option>
              <option value="person-1">Person-1</option> 
              <option value="person-2"> Person-2</option>
              <option value="person-3">Person-3</option>
          </select>
          <select name="assignedBy" defaultValue={this.props.assignedBy} onChange={(e)=>this.props.onChange(this.props.id, this.props.index, e.target.name, e.target.value)}>
              <option value={this.props.assignedBy}>{this.props.assignedBy}</option>
              <option value="person-1">Person-1</option> 
              <option value="person-2"> Person-2</option>
              <option value="person-3">Person-3</option>
          </select>
          <input 
            type="checkbox" 
            id="checklist__item__completed"
            checked={this.props.completed == true ? 'checked' : ''}
            value="completed"
            onChange={(e)=>this.props.onChange(this.props.id, this.props.index, e.target.value, e.target.checked)}
          
          />
          <input 
            type="checkbox" 
            id="checklist__item__approved"
            checked={this.props.approved == true ? 'checked' : ''}
            value="approved"
            onChange={(e)=>this.props.onChange(this.props.id, this.props.index, e.target.value, e.target.checked)}
          
          />
          <a href="#"
            onClick={(e)=>this.props.onDelete(this.props.index)}
          >
            Remove
          </a>
        </div>
    );
  }

}
