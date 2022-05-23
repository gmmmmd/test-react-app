import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState( {
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState( {
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        { !this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode} >{ this.props.status ? this.props.status : 'Введите статус' }</span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input
              type="text"
              onChange={this.onStatusChange}
              value={this.props.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              
            />
          </div>
        }
      </div>
    );
  }
};

export default ProfileStatus;