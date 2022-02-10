import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stopped: true, time: 0 };
    this.handleTick = this.handleTick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleTick() {
    this.setState(
      { stopped: !(this.state.stopped) },
      this.incrementTime
    );
  }

  handleReset() {
    if (this.state.stopped) {
      this.setState(
        { time: 0 },
        this.incrementTime
      );
    }
  }

  incrementTime() {
    if (!(this.state.stopped)) {
      this.tick();
    } else {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.timerID = setInterval(
      () => { this.setState({ time: this.state.time + 1 }); },
      1000
    );
  }

  icon() {
    if (this.state.stopped) {
      return 'fas fa-solid fa-play fa-lg';
    } else {
      return 'fas fa-solid fa-pause fa-lg';
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='clock'>
          <button onClick={this.handleReset}>{this.state.time}</button>
        </div>
        <div className='start'>
          <button onClick={this.handleTick}>
            <i className={this.icon()}></i>
          </button>
        </div>

      </div>
    );
  }
}
