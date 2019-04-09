import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Navbar extends Component {
   onLogoutClick(e) {
     e.preventDefault();
     this.props.logoutUser
   }
  render() {
    const {isAuthenticated,user} = this.props.auth;
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
                <img src={user.avatar} alt={user.name} style={{with:'25px',marginRight:'5px'}}
                title="you must have gravatar connected to your email to display" /> {' '}
                Logout
                </a>

              </li>
       </ul>
    );
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/landing">DevConnector</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="profiles.html"> Developers
                </a>
              </li>
            </ul>
    
            {isAuthenticated}
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  logoutUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  
}

const mapStateToProps = (state)  => ({
   auth: state.auth,
   errors:state.errors


});
//export default Register;
export default connect(mapStateToProps,{logoutUser})(withRouter(Register));