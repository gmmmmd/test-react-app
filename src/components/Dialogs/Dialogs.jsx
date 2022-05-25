import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { required, maxLengthCreator } from './../../utils/validators/validators';
import { Textarea } from './../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message} />);

  const addNewMessage = (values) => {
    props.sendMessageCreator(values.newMessageBody);
  };

  if(!props.isAuth) {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.items}>
        { dialogsElement }
      </ul>
      <div className={classes.wrapper}>
        <ul className={classes.messages}>
          { messagesElement }
        </ul>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.formMessage}>
      <Field 
        component={Textarea}
        name="newMessageBody"
        validate={[required, maxLength100]}
        placeholder="Enter your message" 
        className={classes.textarea} 
      />
      <button className={classes.button} >Send message</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm);

export default Dialogs;