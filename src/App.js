import React, { Component } from 'react';
import HeaderAndProgressBar from "./container/HeaderAndProgressBar";
import LoginPassword from "./container/LoginPassword";
import PersonalData from "./container/PersonalData";
import Dashboard from "./container/Dashboard";


class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1
    }
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
  }
  handleNextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  handlePreviousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  render() {
    let { page } = this.state;
    let pageSelector;

    switch(page) {
      case 1:
        pageSelector = <LoginPassword onNextPage={this.handleNextPage} />
        break;
      case 2:
        pageSelector = <PersonalData onPreviousPage={this.handlePreviousPage} onNextPage={this.handleNextPage} />
        break;
      default:
        pageSelector = <Dashboard />
    }      

    return (
      <div className="box">       
          <HeaderAndProgressBar page={page} />          
          { pageSelector }       
      </div>
    );
  }
}

export default App;
