import React, { useState } from 'react';
import FaceIcon from '@material-ui/icons/Face';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { styled, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from "prop-types";
import Fab from '@material-ui/core/Fab';

const Tweet = (props) => {
  const MyFab = styled(Fab)({
    marginLeft: 'auto',
    marginRight: '5px',
  });

  const useStyles = makeStyles({
    tweet: {
      margin: '10px',
      padding: '5px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
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
      thumbUp: {}
    }
  });

  const classes = useStyles();
  const [tweetLiked, likeTweet] = useState(false);

  let MyButton = null;
  if (tweetLiked) {
    MyButton =
      <MyFab color="secondary" onClick={() => likeTweet(!tweetLiked)}>
        <ThumbUpIcon fontSize='small' />
      </MyFab>;
  } else {
    MyButton =
      <MyFab onClick={() => likeTweet(!tweetLiked)}>
        <ThumbUpIcon fontSize='small' />
      </MyFab>;
  }

  return (
    <Card className={classes.tweet} >
      <FaceIcon fontSize='large' />
      <div className={classes.textBox}>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
      {MyButton}
    </Card>
  );
}

Tweet.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string
};

export default Tweet;