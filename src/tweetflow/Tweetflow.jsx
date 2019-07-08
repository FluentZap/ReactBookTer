import React from "react";
import Tweet from "./Tweet";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TweetBasic from "./TweetBasic";

const useStyles = makeStyles(theme => ({
  tweetflow: {
    width: '300px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'min-content',
    padding: '10px',
    margin: '0 10px'
  },
  textinput: {
    width: "100%"
  }
}));



let tweets = [
  {
    heading: 'Tilly Tompson',
    text: 'Lol look at this'
  },
  {
    heading: 'Bill Dotrieve',
    text: "Huh What's this button"
  },
  {
    heading: 'Kate Krig',
    text: 'Click Here'
  }
];

function Tweetflow() {
  const classes = useStyles();
  return (
    <div className={classes.tweetflow}>

      <TextField className={classes.textinput} type="text" placeholder="What's Happening?" />
      {tweets.map((tweet, index) =>
        <TweetBasic
          heading={tweet.heading}
          text={tweet.text}
          key={index} />
      )}
    </div>
  );
}

export default Tweetflow;