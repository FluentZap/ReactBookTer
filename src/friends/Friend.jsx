import React from 'react';
import FaceIcon from '@material-ui/icons/AccountBoxRounded';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Blue from '@material-ui/core/colors/blue';

const primary = Blue[400];

const useStyles = makeStyles(theme => ({
  tweet: {
    margin: '10px',
    padding: '5px',
    display: 'flex',
    '& div': {
      display: 'flex',
      flexDirection: 'column'
    },
    '& h4': {
      margin: 0
    },
    '& p': {
      margin: 0
    },
  }
}));

function Friend() {
  const classes = useStyles();
  return (
    <Card className={classes.tweet}>
      <FaceIcon fontSize='large'/>
      <div>
        <Button variant="contained" color='primary'>Add Friend</Button>
      </div>
    </Card>
  );
}

export default Friend;