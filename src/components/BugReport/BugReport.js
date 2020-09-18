import React from 'react'; 
import './BugReport.css'; 
import VirtualTable from '../DataTable/VirtualTable'; 

const BugReport = () => {

    return (
        <div className='bug-report'>
            <VirtualTable />
        </div>
    )
}; 

export default BugReport; 