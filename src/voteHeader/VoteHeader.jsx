import React from 'react';
import VoteOptions from './VoteOptions';


let breeds = [
  {
    name: 'Wheatan Terrier'
  },
  {
    name: 'Golden Retriever'
  },
  {
    name: 'Airedale Terrier'
  }

];

class VoteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVote: null
    };
    this.selectVote = this.selectVote.bind(this);
  }

  selectVote(index) {
   this.setState({selectedVote: index})
  }

  render() {

    let someething = null;
    if (this.state.selectedVote != null) {
      console.log(this.state.selectedVote);
      
      someething = <h1>Thank you for voting for {breeds[this.state.selectedVote]}</h1>
    }

    return (
      <div>
        <h1>What is your favorite puppy breed?</h1>
        {breeds.map((name, index) =>
          <VoteOptions key={index}
            vote={this.selectVote}
            name={name}
          />
        )}
        {someething}
      </div>
    )
  }

}

export default VoteHeader;