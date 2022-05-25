import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import classes from './Login.module.css';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        validate={[required]}
        name="login"
        type="text"
        placeholder="Login"
      />
      <Field
        component={Input}
        validate={[required]}
        name="password"
        type="text"
        placeholder="Password"
      />
      <Field 
        component={Input} 
        name="rememberMe" 
        type="checkbox" 
      /> remeber me
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  
  return (
    <div className={classes.loginBox}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;