
import React, { PropTypes, Component } from 'react';
//import {List} from 'immutable';


export default class AddJob extends Component {

 /* static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };*/

  render() {

    return (
        <div className="addjob">
            <form className="addjob__inputs" 
            onSubmit={
                (e) => {
                    e.preventDefault();
                    this.props.onAdd(
                        {
                        "job" : e.target.elements.job.value
                        }
                    );
                    e.target.elements.job.value = '';
                }
            }>
                <input name="job" type="text" placeholder="Job number and description" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
  }

}


