import React from "react";

export class Clock extends React.Component {
    // Add your methods in here.
    constructor(props) {
        super(props);
        this.state = {
            date: new Date() 
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
    componentDidMount() {
        // Paste your code here.
        const oneSecond = 1000;
        setInterval(() => {
          this.setState({ date: new Date() });
        }, oneSecond);
      }
  }  

  // The Togglable Clock that never was
/* import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
} */