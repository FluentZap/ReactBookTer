import React, { useState } from 'react'

export default function TweetBasic(props) {
  //state hook
  const [buttonVisibleOnPage, setLike] = useState(false);

  
  let MyButton =null;
  if (buttonVisibleOnPage) {
    MyButton = <button onClick={()=> setLike(false)}>Like</button>
  } else {
    MyButton = <button onClick={()=> setLike(true)}>Don't Like</button>
  }

  return (    
    <div>
      <h4>{props.heading}</h4>
      <h6>{props.text}</h6>
      {MyButton}
    </div>
  );
}