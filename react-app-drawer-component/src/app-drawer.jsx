import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'hidden',
      menu: 'slide-close'
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState(
      { modal: '', menu: 'slide-open' }
    );
  }

  handleClose() {
    this.setState(
      { modal: 'hidden', menu: 'slide-close' }
    );
  }

  render() {
    return (
      <div>
        <div id='menu-icon'>
          <i className="fa-solid fa-bars" onClick={this.handleOpen}></i>
        </div>
        <div id='modal-bkg' className={this.state.modal} onClick={this.handleClose}>
        </div>
        <div id='side-menu' className={this.state.menu}>
          <h2>Menu</h2>
          <a onClick={this.handleClose}>About</a>
          <a onClick={this.handleClose}>Get Started</a>
          <a onClick={this.handleClose}>Sign In</a>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
