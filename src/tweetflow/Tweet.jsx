import React, { Component } from 'react';
import FaceIcon from '@material-ui/icons/Face';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { withStyles, styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from "prop-types";
import Fab from '@material-ui/core/Fab';

const MyFab = styled(Fab)({
  marginLeft: 'auto',
  marginRight: '5px',
});


let styles = theme => ({
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
});


class Tweet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweetLiked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Workes Tweet Liked!');
    this.setState({ tweetLiked: !this.state.tweetLiked });
  }

  render() {
    const { classes } = this.props;
    let MyButton = null;
    if (this.state.tweetLiked) {
      MyButton =
        <MyFab color="secondary" onClick={this.handleClick}>
          <ThumbUpIcon fontSize='small' />
        </MyFab>;
    } else {
      MyButton =
        <MyFab onClick={this.handleClick}>
          <ThumbUpIcon fontSize='small' />
        </MyFab>;
    }
    console.log(MyButton);

    return (
      <Card className={classes.tweet} >
        <FaceIcon fontSize='large' />
        <div className={classes.textBox}>
          <h4>{this.props.heading}</h4>
          <p>{this.props.text}</p>
        </div>
        {MyButton}
      </Card>
    );
  }
}

Tweet.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string
};

export default withStyles(styles)(Tweet);