import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { Button } from './Button';
//import { QuoteMaker } from './Quotemaker';
//import { Welcome } from './Welcome';
//import { Talker } from './Talker';
import { PropsDisplayer } from "./PropsDisplayer";
import { D100 } from "./D100";
import { D100FunctionalComponent } from "./D100FunctionComponent";
import { ReadState } from "./ReadState";
import { Toggle } from "./Toggle";
import { RandomColorPicker } from "./RandomColorPicker";
import { Clock } from "./Clock";

// A component class written in the usual way:
export class UsualMyComponentClass extends React.Component {
  render() {
    return <h1>component class written in the usual way</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const StatelessFunctionalComponentClass = () => {
  return <h1>stateless functional component</h1>;
};

//
// Function Components and Props
export function YesNoQuestion(props) {
  return (
    <div>
      <p>{props.prompt}</p>
      <input value="Yes" />
      <input value="No" />
    </div>
  );
}

// ReactDOM.render goes here:
ReactDOM.render(
  <div>
    <Clock />
    {/* <PropsDisplayer myProp="Hello" /> */}
    {/* <Toggle /> */}
    {/* <ReadState /> */}
    {/* <D100 /> */}
    <RandomColorPicker />
    {/* <UsualMyComponentClass /> */}
    {/* <StatelessFunctionalComponentClass /> */}
    {/* <YesNoQuestion prompt="Have you eaten an apple today?" /> */}
    <D100FunctionalComponent />
  </div>,
  document.getElementById("root")
);
