import React from 'react';
import LogIn from './LogIn/LogIn'; 
import Dashboard from './Dashboard/Dashboard'; 
import BugReport from './BugReport/BugReport'; 
import AppBar from './AppBar/AppBar'; 
import Profile from '../components/Profile/Profile'; 
import Notification from '../components/Notification/Notification'; 
import Message from '../components/Message/Message'; 
import Teams from '../components/Teams/Teams'; 

function App() {
  return (
    <div className="App">
      {/* <LogIn />  */}
      <AppBar /> 
      {/* <Dashboard />  */}
      <BugReport /> 
    </div>
  );
}

export default App;
