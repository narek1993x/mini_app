import React from "react";
import { connect } from "react-redux";


const consoleAllData = (data) => {
    let displayData = `Your data:\n${JSON.stringify({user_data: data}, null, 2)}`;   
     console.log(displayData);
     alert(displayData);
}

const Dashboard = ({ data }) => {    
    return (
        <div className="third-page">
            <div className="dashboard-check">                
                <img src="http://www.matchware.com/wp/wp-content/themes/matchware/img/icons/checkmark.png" alt="pic"/>
            </div>
            <div className="dashboard-button">
                <button className="btn btn-primary" onClick={() => consoleAllData(data)} >Go To Dashboard <i className="fa fa-arrow-right" ></i></button>
            </div>
        </div>
    );
}

export default connect(
    state => ({ 
        data: state.data 
    })
)(Dashboard);
