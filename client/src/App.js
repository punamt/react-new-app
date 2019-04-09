import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import Footer  from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, loginUser} from'./actions/authActions';
import setAuthToken from './utils/setAuthToken';
 

  
//check  for token 
if(localStorage.jwtToken){
  //set auth token header
  setAuthToken(localStorage.jwtToken);
  //decode get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated in redux
   store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime =Date.now()/1000;
  if(decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
    //
    //redirect to loginUser
    window.location.href='/login';
  }
}

class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar/>
          <Route  exact path="/" component={Landing}/>
          <div className="container">
            <Route  exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          
          </div>
          
          <Footer/>
        </div>

        </Router>
     </Provider>  
      
    );
  }
}

export default App;
