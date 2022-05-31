import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Navigate } from 'react-router-dom';
import { Input, Checkbox } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import classes from './Login.module.css';
import styles from './../common/FormsControls/FormsControls.module.css';
import { login } from './../../redux/auth-reducer';



const LoginForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        validate={[required]}
        name="email"
        type="text"
        placeholder="Email"
      />
      <Field
        component={Input}
        validate={[required]}
        name="password"
        type="text"
        placeholder="Password"
      />
      <Field 
        component={Checkbox} 
        name="rememberMe" 
        type="checkbox"
      />
      { props.error && <div className={styles.formSummaryError}>{ props.error }</div> }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {
  
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  
  if (props.isAuth) {
    return (
      <Navigate to="/profile" />
    );
  }
  // console.log(props.isAuth)
  return (
    <div className={classes.loginBox}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);