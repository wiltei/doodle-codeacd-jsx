import React from "react";

export class RandomColorButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        //className={this.props.light ? 'light-btn' : 'dark-btn'}
      >
        Arvo taustalle väri!
      </button>
    );
  }
}
