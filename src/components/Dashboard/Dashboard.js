import React from 'react'; 
import AppBar from '../AppBar/AppBar'; 
import DataTable from './DataTable'; 

const Dashboard = () => {

    return (
        <div>
            <AppBar /> 
            <DataTable /> 
            <h1>Dashboard</h1>
        </div>
    )
}; 

export default Dashboard; 