import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import { addPersonalData } from "../actions";
import { personal_data_validate as validate } from "../tools/validations";
import DataOfBirth from "../containers/DataOfBirth";
import Gender from "../containers/Gender";
import AboutUs from "../containers/AboutUs";


class PersonalData extends Component {
    constructor() {
        super(); 

        this.onSubmit = this.onSubmit.bind(this);       
    }

    onSubmit(values) {
        let newValues = Object.assign({}, {
            data_of_birth: `${values.day}-${values.month}-${values.year}`,
            sex: values.sex,
            how_hear_about_us: values.about_us || null            
        });

        this.props.addPersonalData(newValues);       
        this.props.onNextPage();
    }   
    
    render() {
        const { handleSubmit, onPreviousPage, pristine, submitting } = this.props;        

        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="second-page">
                <DataOfBirth />
                <Gender />
                <AboutUs />
                
                <hr />
                <div className="buttons-container">
                    <button className="btn btn-primary next" disabled={pristine || submitting}>Next <i className="fa fa-arrow-right"></i></button>
                    <button className="btn btn-default back" type="button" onClick={onPreviousPage}>Back</button>
                </div>                
            </form>
        );
    }
}



PersonalData = reduxForm({
  form: 'account',  
  validate,
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(PersonalData);

PersonalData = connect(null, { addPersonalData })(PersonalData);

export default PersonalData;