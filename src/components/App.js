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
import CreateTicket from '../components/CreateTicket/CreateTicket'; 

function App() {
  return (
    <div className="App">
      {/* <LogIn />  */}
      <SignUp /> 
      {/* <AppBar />  */}
      {/* <Dashboard />  */}
      {/* <BugReport />  */}
      {/* <CreateTicket />  */}
    </div>
  );
}

export default App;
