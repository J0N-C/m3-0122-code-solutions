import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.scrollLeft = this.scrollLeft.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  dotClick(e) {
    const newImg = parseInt(e.target.getAttribute('data-index'));
    if (newImg !== this.state.currentImage) {
      this.setState({ currentImage: newImg });
    }
  }

  scrollLeft() {
    let newImg = this.state.currentImage - 1;
    if (newImg < 0) {
      newImg = this.props.images.length - 1;
    }
    this.setState({ currentImage: newImg });
  }

  scrollRight() {
    let newImg = this.state.currentImage + 1;
    if (newImg > this.props.images.length - 1) {
      newImg = 0;
    }
    this.setState({ currentImage: newImg });
  }

  showImage() {
    const i = this.state.currentImage;
    return (
      <img src={this.props.images[i].url} alt={this.props.images[i].name} />
    );
  }

  startTimer() {
    this.timerId = setInterval(
      this.scrollRight,
      3000
    );
  }

  countProgressDots() {
    return (
      this.props.images.map((e, i) => {
        if (i !== this.state.currentImage) {
          return <i className='fa-regular fa-circle' data-index={i} onClick={this.dotClick}></i>;
        } else {
          return <i className='fa-solid fa-circle' data-index={i} onClick={this.dotClick}></i>;
        }
      })
    );
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    clearInterval(this.timerId);
    this.startTimer();
  }

  render() {
    return (
    <div id='carousel-container'>
        <div id='carousel-scroll'>
          <div id='scroll-left' onClick={this.scrollLeft}>
            <i className='fa-solid fa-chevron-left'></i>
          </div>
          <div className="img-container">
            {this.showImage()}
          </div>
          <div id='scroll-right' onClick={this.scrollRight}>
            <i className='fa-solid fa-chevron-right'></i>
          </div>
      </div>
      <div id='dots-container'>
        {this.countProgressDots()}
      </div>
    </div>
    );
  }
}

export default Carousel;
