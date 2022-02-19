import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.tagName !== 'BUTTON') return;
    const currentId = parseInt(e.currentTarget.getAttribute('id'));
    if (this.state.open === currentId) {
      this.setState(
        { open: false }
      );
    } else {
      this.setState(
        { open: currentId }
      );
    }
  }

  checkOpened(id1, id2) {
    if (id1 === id2) {
      return 'open';
    } else {
      return 'closed';
    }
  }

  accordionContent(openId) {
    const accordionItems = this.props.content.map(item => {
      return (
        <div key={item.id} id={item.id} onClick={this.handleClick}>
          <button className='accordion-title'>
            {item.title}
          </button>
          <div className={this.checkOpened(item.id, openId)}>
            <p>
              {item.text}
            </p>
          </div>
        </div>
      );
    });
    return <div id="accordion-items">{accordionItems}</div>;
  }

  render() {
    return (
      this.accordionContent(this.state.open)
    );
  }
}

export default Accordion;
