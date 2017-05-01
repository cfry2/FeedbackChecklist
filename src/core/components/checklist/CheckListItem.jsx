import React, { PropTypes, Component } from 'react';
import checkListItem from 'core/components/checklist/checkListItem';
import {List} from 'immutable';


export default class CheckLisItem extends Component {

  /*static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/


  render() {
    let title = 'React Redux Boilerplate';
    //this.context.onSetTitle(title);
    //console.log(this.props);
    return (
        <div className="checklist__item__inner">
          <span>{this.props.feedback}</span>
          <span>{this.props.assignedTo}</span>
          <span>{this.props.assignedBy}</span>
          <input 
            type="checkbox" 
            id="checklist__item__completed"
            checked={this.props.completed == true ? 'checked' : ''}
            value="completed"
            onChange={(e)=>this.props.onChange(this.props.index, e.target.value, e.target.checked)}
          
          />
          <input 
            type="checkbox" 
            id="checklist__item__approved"
            checked={this.props.approved == true ? 'checked' : ''}
            value="approved"
            onChange={(e)=>this.props.onChange({"id": "approved", "object": this.props, "value" : this.props.approved}, this.props.approved)}
          
          />
        </div>
    );
  }

}
