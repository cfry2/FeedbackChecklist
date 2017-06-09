
import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import sass from 'styles/partials/_settings';


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
                <Toolbar>
                    <ToolbarGroup>
                        <TextField
                            name="job"
                            hintText="Job number and description"
                        />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <RaisedButton
                            type="submit" 
                            label="Add Job" 
                            primary={true} 
                            buttonStyle={{
                                backgroundColor: sass.viGreen
                            }}
                        />
                    </ToolbarGroup>
                </Toolbar>
            </form>
        </div>
    );
  }

}


