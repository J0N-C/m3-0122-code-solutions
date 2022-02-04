import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    const isClicked = this.state.isClicked;
    let text;
    if (isClicked) {
      text = 'Thanks';
    } else {
      text = 'Click Me';
    }

    return <button onClick={this.handleClick}>{text}</button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
