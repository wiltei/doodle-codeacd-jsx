import React from 'react';
import ReactDOM from 'react-dom';

export class ReadState extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'Best App' }
}
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

