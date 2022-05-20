import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
  };

  render() {
    return (
      <div>
        { !this.state.editMode &&
          <div>
            <span>{ this.props.status }</span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input type="text" value={this.props.status} />
          </div>
        }
      </div>
    );
  }
};

export default ProfileStatus;