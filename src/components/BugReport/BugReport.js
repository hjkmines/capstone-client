import React from 'react'; 
import './BugReport.css'; 
import DataTable from '../DataTable/DataTable'; 
import EditableTable from '../DataTable/EditableTable'; 

const BugReport = () => {

    return (
        <div className='bug-report'>
            <EditableTable />
        </div>
    )
}; 

export default BugReport; 