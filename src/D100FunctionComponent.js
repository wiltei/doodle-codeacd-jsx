// remember, usestate hook needs to be imported
import React, { useState } from "react";

// past rolls are nice to see so lets put them in a variable
// declared here so it's available for the whole component
var rollHistory = [];

// D100 reformed to a stateless function component
export const D100FunctionalComponent = () => {
  // usestate hook array is put in to an array and given nice descriptive names
  // setting part though is supposed to be named with set prefix - not the best, but ok
  let [roll, setRoll] = useState(0);
  // actual dice roll randomthing is in the array at [0]... I think
  roll = Math.floor(Math.random() * 100) + 1;
  //console.log(roll);

  // lets put previous rolls in a table
  // this is so counter-intuitive but I can make a const in which order a html element to be
  // created - amazing
  const Taulukkotesti = (
    <div className="RollTable">
      <table>
        <tr>
          {/* This is where actual value is extracted from the rollHistory
          variable is handled. Seems heavy to call (each time?) for every value but ok */}
          {rollHistory.map((val) => {
            return <td>{val}</td>;
          })}
        </tr>
      </table>
    </div>
  );

  rollHistory.push(roll);
  console.log(rollHistory);
  return (
    <div>
      <p>Heitä satasivuista funktiokomponentin noppaa</p>
      <button onClick={() => setRoll(roll)}>{roll}</button>
      <p>Rolls since last reload</p>
      {Taulukkotesti}
    </div>
  );
};

//ReactDOM.render(<D100FunctionComponent />, document.getElementById("root"));
