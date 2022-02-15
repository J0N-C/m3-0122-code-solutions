import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='email' value={this.state.email} onChange={this.handleChange} />
        <button type='submit' value='Submit'>SUBMIT</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsLetterForm />,
  document.getElementById('root')
);
