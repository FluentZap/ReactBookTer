import React from 'react'

export default function VoteOptions(props) {
  return (
    <div>
        <p>{props.name.name}<button onClick={props.vote}>Vote</button></p>
    </div>
  )
}
