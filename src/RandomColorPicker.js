import React from "react";
import { RandomColorButton } from "./RandomColorButton";

export class RandomColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // This is the initial color, UA flag yellow, cos' why not
      color: [254, 221, 0],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // the function, or method I guess, to generate a random set of values for RGB color. Stored in an array.
  // Renamed array to a more self explanatory name.
  generateColor() {
    // Array is introduced, I suppose this is better
    let randomRGBArray = [];
    // for-loop loops through three times, ie. one value for each of the R-G-B
    for (let i = 0; i < 3; i++) {
      // push method yanks the value in as last
      // floor rounds up, I think
      randomRGBArray.push(Math.floor(Math.random() * 256));
    }
    // After this little machine has done it's job, it spews out the generated ARRAY.
    return randomRGBArray;
  }

  // Changed parameter name, didn't make sense.
  // This seems to be simply returning string with rgb and the current (background) colour
  // join() -method indeed returns array as string
  formatColor(currentColour) {
    return "RGB(" + currentColour.join(", ") + ")";
  }

  // Applies the new color to the render
  applyColor() {
    // puts the current state of the color-state to the let using another function which returns.. a ... string...
    let pickedColor = this.formatColor(this.state.color);
    // and that string is applied to this thing which must be the actual beefyaction here which defines the background colour
    document.body.style.background = pickedColor;
    console.log(document.body.style.background);
  }

  // called on click (of the button)
  // changes/sets/generates new state for color
  handleClick() {
    this.setState({ color: this.generateColor() });
  }

  // And the beef of the beef, application happens here and below obv.
  // interestings.. this has to do with React lifecycle API
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  render() {
    return (
      <div>
        <h1>Your color is: {this.formatColor(this.state.color)}</h1>
        <RandomColorButton onClick={this.handleClick} />
      </div>
    );
  }
}
