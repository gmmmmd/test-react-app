import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      { !editMode &&
        <div>
          <span onDoubleClick={activateEditMode} >{ props.status || 'Введите статус' }</span>
        </div>
      }
      { editMode &&
        <div>
          <input
            type="text"
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      }
    </div>
  );
};

export default ProfileStatusWithHooks;

