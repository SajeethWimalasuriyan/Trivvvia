import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TriviaCard from './Components/TriviaCard';

function App() {
  const [open, setOpen] = React.useState(true);
  const [un, setUN] = React.useState('');

  const handleText = (event) => {
    setUN(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseWithName = () => {
    setOpen(false);
    localStorage.setItem('userName', un);
  };
  const setName = () => {
    if (localStorage.getItem("userName") === null) {
      return <div>
   
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Your Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
          For Trivvvia to store your high score you will need to enter a non-offensive name. You can play without a name but any progress will not be tracked or be ranked.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            onChange={handleText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Stay Offline
          </Button>
          <Button onClick={handleCloseWithName} color="primary">
            Play Online
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    }
  };
  return (
    <div className="App">
      
      <Navbar></Navbar>
      {setName()}
     
    
    </div>
  );
}

export default App;
