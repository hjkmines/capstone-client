import React from 'react'; 
import './LogIn.css'
import { TextField, Button } from '@material-ui/core';
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
        <form 
            noValidate 
            autoComplete="off" 
            className='login'
        >
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
            <Button 
                variant="contained" 
                color="primary"
                className='item formButton'
                style={{ marginTop: '30px' }}
            >
            Log In 
            </Button>
            <Button 
                variant="contained" 
                color="primary"
                className='item formButton'
                style={{ marginTop: '20px' }}
            >
            Sign Up
            </Button>
        </form>
        </div>
        </div>
    )
}

export default LogIn; 