import React from 'react'; 
// import AppBar from '../AppBar/AppBar'; 
import NestedList from './NestedList'; 
import Dashboard1 from './Dashboard1'; 
import MiniDashboard from './MiniDashboard'; 
import './Dashboard.css'; 
import OpenDialog from '../CreateTicket/OpenDialog'; 
import AddButton from '../Buttons/AddButton'; 

const Dashboard = () => {

    return (
        <div>
            {/* <AddButton />  */}
            {/* <AppBar />  */}
            <Dashboard1 />
            <OpenDialog />
            {/* <DataTable />  */}
            {/* <NestedList />  */}
            {/* <h1>Dashboard</h1> */}
        </div>
    )
}; 

export default Dashboard; 