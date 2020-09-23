import React from 'react';
import Login from './Auth/LogIn'; 
import Register from './Auth/Register'; 
import NavBar from './NavBar/NavBar'; 
import Landing from './Landing/Landing'; 
import Dashboard from './Dashboard/Dashboard'; 
import BugReport from './BugReport/BugReport'; 
import AppBar from './AppBar/AppBar'; 
import Profile from '../components/Profile/Profile'; 
import Notification from './Notification/Notification'; 
import Message from '../components/Message/Message'; 
import Teams from '../components/Teams/Teams'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> 
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        {/* <AppBar /> 
        <Switch>
          <Route path="/dashboard" component={Dashboard} exact /> 
          <Route path="/teams" component={Teams} /> 
          <Route path="/profile" component={Profile} /> 
          <Route path="/message" component={Message} /> 
          <Route path="/bugreport" component={BugReport} /> 
          <Route path="/notification" component={Notification} /> 
          <Route component={Error} /> 
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
