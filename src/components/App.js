import React from 'react';
import LogIn from './LogIn/LogIn'; 
import Dashboard from './Dashboard/Dashboard'; 
import BugReport from './BugReport/BugReport'; 
import AppBar from './AppBar/AppBar'; 

function App() {
  return (
    <div className="App">
      {/* <LogIn />  */}
      <AppBar /> 
      <Dashboard /> 
    </div>
  );
}

export default App;
