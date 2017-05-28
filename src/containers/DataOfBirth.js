import React from "react";
import { Field } from 'redux-form';

const renderField = ({ input, placeholder, className,  type, meta: { touched, error } }) => (          
    <div className="data-of-birth-input">        
        <input {...input} type={type}  className={className} placeholder={placeholder} />
        {touched && ((error && <span className="text-danger error-message">{error}</span>))}               
    </div>    
)


const DataOfBirth = (props) => {
    return (
        <div className="form-group data-of-birth-group">
            <div className="data-of-birth-title">DATE OF BIRTH</div>                    
            <div className="container-1">             
                <Field
                    name="day"
                    className="form-control"
                    placeholder="DD"                            
                    component={renderField}
                    type="number"                                                    
                /> 
                <Field
                    name="month"
                    className="form-control"
                    placeholder="MM"                            
                    component={renderField}
                    type="number"                                                     
                />
                <Field
                    name="year"
                    className="form-control"
                    placeholder="YYYY"                            
                    component={renderField}
                    type="number"                                                     
                />                
            </div>                                                           
        </div>
    );
}

export default DataOfBirth;