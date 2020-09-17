import React from 'react'; 
import './LogIn.css'
import Box from '@material-ui/core/box';
import logo from '../bugView.JPG';


const LogIn = () => {

    return (
        <div>
            <img 
                src={logo} 
                alt="bugview logo" 
                className="logo"
            /> 
        <div className='form'>
        </div>
        </div>
    )
}

export default LogIn; 