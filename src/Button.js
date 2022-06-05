import React from 'react';

export class Button extends React.Component {

  render() {
    console.log("Props object comin' up!");
 
    console.log(this.props);
   
    console.log("That was my props object!");
    const buttonPropsit = JSON.stringify(this.props);
    return (
        <div>
{/*       <h1>Button.js propsit</h1>
        <h2>{buttonPropsit}</h2> */}
      </div>
    );
  }
}