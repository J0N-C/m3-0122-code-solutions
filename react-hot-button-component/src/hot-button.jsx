import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => ({
      clickCount: prev.clickCount + 1
    }));
  }

  render() {
    let buttonColor = 'coldest';
    let textColor = 'whitetxt';
    if (this.state.clickCount > 2) {
      buttonColor = 'cold';
    }
    if (this.state.clickCount > 5) {
      buttonColor = 'warm';
    }
    if (this.state.clickCount > 8) {
      buttonColor = 'hot';
      textColor = 'blacktxt';
    }
    if (this.state.clickCount > 11) {
      buttonColor = 'hotter';
    }
    if (this.state.clickCount > 14) {
      buttonColor = 'hottest';
    }
    return <button className={`${buttonColor} ${textColor}`} onClick={this.handleClick}>Hot Button</button>;
  }
}
