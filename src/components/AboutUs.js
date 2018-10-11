import React from "react";
import { Field } from 'redux-form';

const renderField = ({ label, input, className, contentEditable, type, meta: { touched, error } }) => (
    <div> 
        <select {...input}  type={type} className={className} >
            <option value=""></option>
            <option value="Friends">Friends</option>
            <option value="Internet">Internet</option>            
        </select>
    </div>
)


const AboutUs = (props) => {
    return (
        <div className="form-group about-us">
            <div className="about-us-title">WHERE DID YOU HEAR ABOUT US?</div>      
            <Field
                name="about_us"                
                className="form-control"                                                           
                component={renderField}
                type="input"                            
            /> 
        </div> 
    );
}

export default AboutUs;