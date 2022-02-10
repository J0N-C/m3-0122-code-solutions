import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 'off' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.position === 'off') {
      this.setState({ position: 'on' });
    } else {
      this.setState({ position: 'off' });
    }
  }

  render() {
    return (
      <div className='flex'>
        <div className={`toggle-${this.state.position}`}>
          <button onClick={this.handleClick}></button>
        </div>
        <h2>{this.state.position.toUpperCase()}</h2>
      </div>
    );
  }
}
