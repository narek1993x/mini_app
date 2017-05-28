import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import { createAccount } from "../actions";
import LoginPasswords from "../containers/LoginPasswords";
import { login_passwords_validate as validate } from "../tools/validations";

class LoginPassword extends Component {
    constructor() {
        super();        
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let newValues = Object.assign({}, {
            email: values.email,
            password: values.password
        })        
        this.props.createAccount(newValues);        
        this.props.onNextPage();

    }
    
    render() {
        const { handleSubmit, pristine, submitting } = this.props;        

        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="first-page">
                <LoginPasswords />

                <hr />
                <div className="next-button-container" >                    
                    <button className="btn btn-primary next" type="submit" disabled={pristine || submitting}>Next <i className="fa fa-arrow-right"></i></button>                   
                </div>                              
            </form>
        );
    }
}






LoginPassword = reduxForm({
  form: 'account',  
  validate,
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(LoginPassword);

LoginPassword = connect(null, { createAccount })(LoginPassword);

export default LoginPassword;