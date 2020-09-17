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
            className='login'>
            <TextField 
                id="standard-basic" 
                label="Email" 
                className='textfield'
                />
            <TextField 
            type="password" 
            id="standard-basic" 
            label="Email" 
            className='textfield'
            />
            <Button variant="contained" color="primary">
            Log In 
            </Button>
            <Button variant="contained" color="primary">
            Sign Up
            </Button>
        </form>
        </div>
        </div>
    )
}

export default LogIn; 