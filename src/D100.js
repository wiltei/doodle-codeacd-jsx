import React from "react";

export class D100 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: 0,
    };
    this.onClickRoll = this.onClickRoll.bind(this);
  }

  onClickRoll() {
    let latestRoll = 0;
    latestRoll = Math.floor(Math.random() * 100) + 1;
    this.setState({ roll: latestRoll });
    console.log(latestRoll);
  }

  render() {
    return (
      <div>
        <p>Heitä satasivuista noppaa</p>
        <button onClick={this.onClickRoll}>{this.state.roll}</button>
      </div>
    );
  }
}
