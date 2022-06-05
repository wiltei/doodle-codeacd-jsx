import React from 'react';

export class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>Check out what this component has!</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}