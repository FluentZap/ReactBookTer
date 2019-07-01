import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Tweetflow from './tweetflow/Tweetflow';
import Profile from './profile/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Profilesummary from './profilesummary/Profilesummary';
import Friends from './friends/Friends';

const useStyles = makeStyles(theme => ({
  container: {
    // width: '33%',
    // border: '1px solid black',
    minHeight: 'calc(100vh - 84px)',
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    maxWidth: '996px',
    margin: '0 auto',
    justifyContent: 'space-between',
    padding: '10px',

// eslint-disable-next-line
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      alignItems: 'center',
      // '& div': {
      //   // padding: '10px',
      //   // margin: '10px'
      // }
    }


  },
  profileContainer: {
    margin: '0px!important',
    padding: '0px!important'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <header className="App-header">
      </header>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.profileContainer}>
          <Profile />
          <Profilesummary />
        </div>
        <Tweetflow />
        <Friends />
      </div>
    </div>
  );
}

export default App;
