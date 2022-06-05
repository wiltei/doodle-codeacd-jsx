import React from "react";
//import ReactDOM from 'react-dom';

let uaBlue = "RGB(0, 87, 184)";
let uaYellow = "RGB(254, 221, 0)";

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: uaBlue };
    // It's this line that's added
    this.changeColor = this.changeColor.bind(this);
  }
  /* You just wrote a component class method that called this.setState(). When you write a component class method that uses this, then you need to bind that method inside of your constructor function!

  Add the following line to the end of constructor():  */
  changeColor() {
    const tgldColor = this.state.color == uaBlue ? uaYellow : uaBlue;
    //  let uaBlue = "RGB(0, 87, 184)";
    //  let uaYellow = "RGB(254, 221, 0)";
    this.setState({ color: tgldColor });
  }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <h1>ToGgLe my color</h1>
        <button onClick={this.changeColor}>Toggle my color</button>
      </div>
    );
  }
}
