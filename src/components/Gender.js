import React from "react";
import { Field } from 'redux-form';

const renderField = ({ label, input, type }) => (    
    <div className="btn-group" data-toggle="buttons">             
        <label className="btn btn-default gender-input" style={input.checked ? {backgroundColor: "#428bca"} : {backgroundColor: "white"}}>
            <input {...input} type={type} autoComplete="off"  />
            <span>{label}</span>       
        </label>                      
    </div>
)

const renderError = ({meta: { touched, error }}) => (
    <div className="gender-error-message">
        {touched && ((error && <span className="text-danger">{error}</span>))}
    </div>
);

const Gender = (props) => {
    return (
        <div className="form-group genders-group">
            <div className="gender-title">GENDER</div>
            <div className="container-2">          
                <Field
                    name="sex"                                   
                    component={renderField}
                    type="radio"
                    label="MALE"
                    value="male"                                                
                />       
                <Field
                    name="sex"          
                    component={renderField}
                    type="radio"                                                             
                    value="female"
                    label="FEMALE"                                                
                />
                <Field
                    name="sex"          
                    component={renderField}
                    type="radio"                                                             
                    value="unspecified"
                    label="UNSPECIFIED"                                                
                />
                <Field name="sex" component={renderError} />           
            </div>
        </div> 
    );
}

export default Gender;