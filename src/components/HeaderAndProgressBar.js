import React from "react";

const HeaderAndProgressBar = (props) => {
    let style;
    switch(props.page) {
      case 1:        
        style = {width: "33%"};
        break;
      case 2:        
        style = {width: "66%"};
        break;
      default:        
        style = {width: "100%"}; 
    }
    return (
        <div className="header-and-progress-bar">
            {props.page === 1 || props.page === 2 ? <h4 className="header">Signup</h4> : <h4 className="header">Thank you!</h4>}
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={style} />           
            </div>
        </div>
        
    )
}

export default HeaderAndProgressBar;