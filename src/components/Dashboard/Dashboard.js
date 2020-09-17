import React from 'react'; 
import AppBar from '../AppBar/AppBar'; 
import DataTable from './DataTable'; 
import NestedList from './NestedList'; 
import Dashboard1 from './Dashboard1'; 

const Dashboard = () => {

    return (
        <div>
            <AppBar /> 
            <Dashboard1 />
            {/* <DataTable />  */}
            {/* <NestedList />  */}
            {/* <h1>Dashboard</h1> */}
        </div>
    )
}; 

export default Dashboard; 