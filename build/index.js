"use strict";

var slides = [{
  'img': 'img/1.png'
}, {
  'img': 'img/2.png'
}, {
  'img': 'img/3.png'
}, {
  'img': 'img/4.png'
}, {
  'img': 'img/51.png'
}, {
  'img': 'img/5.png'
}, {
  'img': 'img/6.png'
}];
var PrevButton = React.createClass({
  displayName: "PrevButton",
  render: function render() {
    var disabled = false;

    if (this.props.slideshow.state.currentSlide <= 0) {
      disabled = true;
    }

    return React.createElement("button", {
      disabled: disabled,
      className: "prev",
      onClick: this.handleClick
    }, disabled ? String.fromCharCode(8602) : String.fromCharCode(8612));
  },
  handleClick: function handleClick(e) {
    this.props.slideshow.prevSlide();
  }
});
var NextButton = React.createClass({
  displayName: "NextButton",
  render: function render() {
    var disabled = false;

    if (this.props.slideshow.state.currentSlide >= slides.length - 1) {
      disabled = true;
    }

    return React.createElement("button", {
      disabled: disabled,
      className: "next",
      onClick: this.handleClick
    }, disabled ? String.fromCharCode(8603) : String.fromCharCode(8614));
  },
  handleClick: function handleClick(e) {
    this.props.slideshow.nextSlide();
  }
});
var SlideDisplay = React.createClass({
  displayName: "SlideDisplay",
  render: function render() {
    var slide = this.props.slides[this.props.currentSlide];
    return React.createElement("div", {
      className: "slide"
    }, React.createElement("div", {
      className: "img",
      style: {
        backgroundImage: 'url(' + slide.img + ')',
        height: window.innerHeight
      }
    }));
  }
});
var Adventure = React.createClass({
  displayName: "Adventure",
  getInitialState: function getInitialState() {
    return {
      'currentSlide': 0
    };
  },
  prevSlide: function prevSlide() {
    var newSlide = this.state.currentSlide;

    if (this.state['currentSlide'] > 0) {
      newSlide = newSlide - 1;
    }

    this.setState({
      'currentSlide': newSlide
    });
  },
  nextSlide: function nextSlide() {
    var newSlide = this.state.currentSlide;

    if (this.state.currentSlide < slides.length - 1) {
      newSlide = newSlide + 1;
    }

    this.setState({
      'currentSlide': newSlide
    });
  },
  componentWillMount: function componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  },
  handleKeyDown: function handleKeyDown(e) {
    if (e.keyCode === 37) {
      this.prevSlide();
    } else if (e.keyCode === 39) {
      this.nextSlide();
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "slideshow",
      onKeyPress: this.handleKeyDown
    }, React.createElement(SlideDisplay, {
      slides: slides,
      currentSlide: this.state.currentSlide
    }), React.createElement(PrevButton, {
      slideshow: this
    }), React.createElement(NextButton, {
      slideshow: this
    }));
  }
});
ReactDOM.render(React.createElement(Adventure, null), document.getElementById('slideshow'));