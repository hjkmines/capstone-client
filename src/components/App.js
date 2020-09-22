import React from 'react';
import LogIn from './LogIn/LogIn'; 
import SignUp from './SignUp/SignUp'; 
import Dashboard from './Dashboard/Dashboard'; 
import BugReport from './BugReport/BugReport'; 
import AppBar from './AppBar/AppBar'; 
import Profile from '../components/Profile/Profile'; 
import Notification from '../components/Notification/Notification'; 
import Message from '../components/Message/Message'; 
import Teams from '../components/Teams/Teams'; 
import { Switch } from '@material-ui/core';

function App() {
  return (
    <div className="App">
    <main>
      <AppBar /> 
        <Switch>
          <Route path="/" component={Dashboard} exact /> 
          <Route path="/teams" component={Teams} /> 
          <Route path="/profile" component={Profile} /> 
          <Route path="/message" component={Message} /> 
          <Route path="/bugreport" component={BugReport} /> 
          <Route path="/notification" component={Notification} /> 
        </Switch>
    </main>
      {/* <LogIn />  */}
      {/* <SignUp />  */}
      {/* <BugReport />  */}
      {/* <CreateTicket />  */}
    </div>
  );
}

export default App;
