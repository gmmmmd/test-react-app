import React from 'react';
import classes from './FormsControls.module.css';

const FormControl = ({input, meta, child, name, ...props}) => {
  
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
      { props.children }
      { hasError && <span>{ meta.error }</span> }
    </div>
  );
};

export const Textarea = (props) => {  
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
  );
};

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props}><input {...input} {...restProps} /></FormControl>
  );
};

export const Checkbox = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props}><input {...input} {...restProps} />{ props.input.name }</FormControl>
  );
};

