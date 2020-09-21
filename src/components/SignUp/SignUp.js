import React from 'react'; 
import './SignUp.css'
import { TextField, Button } from '@material-ui/core';
import logo from '../bugView.JPG';

const LogIn = () => {

    return (
        <div className='body' >
            {/* <img 
                src={logo} 
                alt="bugview logo" 
                className="logo"
            />  */}
        <div className='form'>
        <form 
            noValidate 
            autoComplete="off" 
            className='login'
        >
            <TextField 
                id="standard-basic" 
                label="First Name" 
                className='textfield item'
            />
            <TextField 
                id="standard-basic" 
                label="Last Name" 
                className='textfield item'
            />
            <TextField 
                id="standard-basic" 
                label="Job Title" 
                className='textfield item'
            />
            <TextField 
                id="standard-basic" 
                label="Email" 
                className='textfield item'
            />
            <TextField 
                type="password" 
                id="standard-basic" 
                label="Password" 
                className='textfield item'
                style={{ marginTop: '20px' }}
            />
            <TextField 
                type="password" 
                id="standard-basic" 
                label="Confirm Password" 
                className='textfield item'
                style={{ marginTop: '20px' }}
            />
            <Button 
                variant="contained" 
                color="primary"
                className='item formButton'
                style={{ marginTop: '30px' }}
            >
            Submit  
            </Button>
        
        </form>
        </div>
        </div>
    )
}

export default LogIn; 