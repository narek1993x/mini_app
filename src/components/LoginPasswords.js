import React from "react";
import { Field } from 'redux-form';


const renderField = ({ input, label, className,  type, meta: { touched, error } }) => ( 
    <div className="login-password-input">
        <label className={`text${touched && error ? "-danger" : ""} login-password-title`}>{label}</label>      
      <div>
        <input {...input} type={type} className={className} />                     
        {touched && ((error && <span className="text-danger error-message">{error}</span>))}               
      </div>
    </div>   
 
)

const LoginPasswords = (props) => {
    return (
        <div className="form-group login-passwords-group">  
            <Field
                name="email"
                className="form-control"                            
                component={renderField}
                type="email"                
                label="EMAIL IS REQUIRED"                            
            />   
            <Field
                name="password"
                className="form-control"                            
                component={renderField}
                type="password"                
                label="PASSWORD"                            
            />  
            <Field
                name="password_confirm"
                className="form-control"                            
                component={renderField}
                type="password"                
                label="PASSWORD CONFIRM"                            
            />                      
        </div> 
    );
}

export default LoginPasswords;