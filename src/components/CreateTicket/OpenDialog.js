import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, MenuItem } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const severities = [
    {
      value: 'High',
      label: '🔴 High',
    },
    {
      value: 'Normal',
      label: '🟢 Normal',
    },
    {
      value: 'Low',
      label: '🟡 Low',
    }
  ];

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }, 
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 230,
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState('Controlled');
  const [severity, setSeverity] = React.useState('Normal');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

  const handleChange = (event) => {
    setSeverity(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleClickOpen}
      >
        Create Ticket 
      </Button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Create New Ticket 
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Submit 
            </Button>
          </Toolbar>
        </AppBar>
        <form 
            noValidate 
            autoComplete="off" 
            className='login'
        >
            <TextField 
                id="standard-basic" 
                label="Ticket Name" 
                className='textfield item'
            />
            <TextField 
                type="standard-basic" 
                id="standard-basic" 
                label="Assign Team Members" 
                className='textfield item'
                style={{ marginTop: '20px' }}
            />
            <TextField 
                type="standard-basic" 
                id="standard-basic" 
                label="Add GitHub Links to Source Code" 
                className='textfield item'
                style={{ marginTop: '20px' }}
            />
            <TextField
                id="standard-multiline-flexible"
                label="Ticket Description"
                multiline
                rowsMax={4}
            />
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={severity}
                onChange={handleChange}
                helperText="Please select severity"
            >
                {severities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                </MenuItem>
                ))}
            </TextField>
            <TextField
                id="datetime-local"
                label="Select Deadline"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
      </Dialog>
    </div>
  );
}
