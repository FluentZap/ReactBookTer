import React, { Component } from 'react'

export default class TweetBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVisibleOnPage : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({buttonVisibleOnPage : true})    
  }
  
  render() {

    let MyButton = null;
    if(this.state.buttonVisibleOnPage) {
      MyButton = <button onClick={this.handleClick}>Like</button>
    } else {
      MyButton = <button onClick={this.handleClick}>Liked</button>
    }

    return (
      <div>
        <h4>{this.props.heading}</h4>
        <h6>{this.props.text}</h6>
        {MyButton}                
      </div>
    )
  }
}
