import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import classes from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" name="login" type="text" placeholder="Login" className={classes.input} />
      </div>
      <div>
        <Field component="input" name="password"  type="text" placeholder="Password" className={classes.input} />
      </div>
      <div>
        <Field component="input" name="rememberMe"  type="checkbox" /> remeber me
      </div>
      <div>
        <button className={classes.button} >Login</button>
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