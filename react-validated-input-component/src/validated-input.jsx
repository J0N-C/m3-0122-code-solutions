import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      errmsg: '',
      accepted: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState(
      { password: e.target.value },
      this.passwordCheck
    );
  }

  handleSubmit(e) {
    this.passwordCheck();
    e.preventDefault();
  }

  passwordCheck() {
    if (this.state.password.length === 0) {
      this.setState({ errmsg: 'A password is required', accepted: false });
    } else if (this.state.password.length < 8) {
      this.setState({ errmsg: 'Your password is too short', accepted: false });
    } else {
      this.setState({ errmsg: '', accepted: true });
    }
  }

  checkIcon() {
    if (this.state.accepted) {
      return 'fa-solid fa-check';
    } else {
      return 'fa-solid fa-xmark';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='password'>Password</label>
        <div className='flex'>
          <input type='password' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
          <i className={this.checkIcon()}></i>
        </div>
        <div id='err-msg'>
          <p className={`${this.state.accepted}`}>{this.state.errmsg}</p>
        </div>
        <div>
          <button type='submit' value='Submit'>SUBMIT</button>
        </div>
      </form>
    );
  }
}

export default ValidatedInput;
