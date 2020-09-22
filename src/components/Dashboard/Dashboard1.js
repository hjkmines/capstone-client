import React from 'react'; 
import './Dashboard1.css'
import sadCloud from './sad-cloud.png'; 

const Dashboard1 = () => {

    return(
        <div className='dashboard1'>
            <img 
                src={sadCloud} 
                alt='sad cloud' 
                className='cloud'
            />
            <h1 className='error-message'>Sorry, there is no new updates at the moment</h1>
        </div>
    )
}

export default Dashboard1; 