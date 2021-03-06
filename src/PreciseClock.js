import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
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

  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
        return;
    } else {
        clearInterval(this.intervalID);
        
    }
  }
  let delay;
  if (this.props.isPrecise === true) {
    this.intervalID = setInterval(() => {
    this.setState({ date: new Date() });
      }, delay);
  } else {
    this.intervalID = setInterval(() => {
    this.setState({ date: new Date() });
  }, delay);
  }

  
}