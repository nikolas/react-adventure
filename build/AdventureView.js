"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Item = exports.SlideDisplay = exports.NextButton = exports.PrevButton = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var PrevButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PrevButton, _React$Component);

  function PrevButton() {
    _classCallCheck(this, PrevButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(PrevButton).apply(this, arguments));
  }

  _createClass(PrevButton, [{
    key: "render",
    value: function render() {
      var disabled = false;

      if (this.props.slideshow.state.currentSlide <= 0) {
        disabled = true;
      }

      return _react["default"].createElement("button", {
        disabled: disabled,
        className: "prev",
        onClick: this.handleClick
      }, disabled ? String.fromCharCode(8602) : String.fromCharCode(8612));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.props.slideshow.prevSlide();
    }
  }]);

  return PrevButton;
}(_react["default"].Component);

exports.PrevButton = PrevButton;
;

var NextButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NextButton, _React$Component2);

  function NextButton() {
    _classCallCheck(this, NextButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(NextButton).apply(this, arguments));
  }

  _createClass(NextButton, [{
    key: "render",
    value: function render() {
      var disabled = false;

      if (this.props.slideshow.state.currentSlide >= slides.length - 1) {
        disabled = true;
      }

      return _react["default"].createElement("button", {
        disabled: disabled,
        className: "next",
        onClick: this.handleClick
      }, disabled ? String.fromCharCode(8603) : String.fromCharCode(8614));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.props.slideshow.nextSlide();
    }
  }]);

  return NextButton;
}(_react["default"].Component);

exports.NextButton = NextButton;
;

var SlideDisplay =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SlideDisplay, _React$Component3);

  function SlideDisplay() {
    _classCallCheck(this, SlideDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(SlideDisplay).apply(this, arguments));
  }

  _createClass(SlideDisplay, [{
    key: "render",
    value: function render() {
      var slide = this.props.slides[this.props.currentSlide];
      return _react["default"].createElement("div", {
        className: "slide"
      }, _react["default"].createElement("div", {
        className: "img",
        style: {
          backgroundImage: 'url(' + slide.img + ')',
          height: window.innerHeight
        }
      }));
    }
  }]);

  return SlideDisplay;
}(_react["default"].Component);

exports.SlideDisplay = SlideDisplay;
;

var Item =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Item, _React$Component4);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "adv-item",
        height: "20",
        width: "20"
      });
    }
  }]);

  return Item;
}(_react["default"].Component);

exports.Item = Item;
;

var AdventureView =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(AdventureView, _React$Component5);

  function AdventureView(props) {
    var _this;

    _classCallCheck(this, AdventureView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdventureView).call(this, props));
    _this.state = {
      currentSlide: 0
    };
    return _this;
  }

  _createClass(AdventureView, [{
    key: "prevSlide",
    value: function prevSlide() {
      var newSlide = this.state.currentSlide;

      if (this.state['currentSlide'] > 0) {
        newSlide = newSlide - 1;
      }

      this.setState({
        'currentSlide': newSlide
      });
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var newSlide = this.state.currentSlide;

      if (this.state.currentSlide < slides.length - 1) {
        newSlide = newSlide + 1;
      }

      this.setState({
        'currentSlide': newSlide
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      document.addEventListener('keydown', this.handleKeyDown, false);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if (e.keyCode === 37) {
        this.prevSlide();
      } else if (e.keyCode === 39) {
        this.nextSlide();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "adventure",
        onKeyPress: this.handleKeyDown
      });
    }
  }]);

  return AdventureView;
}(_react["default"].Component);

exports["default"] = AdventureView;
;