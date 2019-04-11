import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';



 class Dashboard extends Component {
  render() {
    let dashboardContent;
    return (
      <div className="dashboard">
        <div className="container"> 
          <div classname="row">
            <div className="col-md-4">
              <h1 className="display-4">Dashboard</h1>
                {dashboardContent}
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}
export default Dashboard;
