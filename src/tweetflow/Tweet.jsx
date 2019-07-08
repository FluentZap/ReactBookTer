import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { makeStyles, styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
  tweet: {
    margin: '10px',
    padding: '5px',
    display: 'flex',
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
}));

const MyThumbUpIcon = styled(ThumbUpIcon)({
marginLeft: 'auto',
marginRight: '5px',
});

function Tweet(props) {
  const classes = useStyles();
  return (
    <Card className={classes.tweet}>
      <FaceIcon fontSize='large' />
      <div className={classes.textBox}>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
      <MyThumbUpIcon fontSize='small' />
    </Card>
  );
}

Tweet.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string
};

export default Tweet;