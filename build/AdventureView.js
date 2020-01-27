"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var PIXI = _interopRequireWildcard(require("pixi.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var AdventureView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdventureView, _React$Component);

  function AdventureView(props) {
    var _this;

    _classCallCheck(this, AdventureView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdventureView).call(this, props));
    _this.app = new PIXI.Application({
      antialias: true
    });
    _this.time = 0;
    return _this;
  }

  _createClass(AdventureView, [{
    key: "onButtonDown",
    value: function onButtonDown() {}
  }, {
    key: "onButtonUp",
    value: function onButtonUp() {
      console.log('item clicked!');
    }
  }, {
    key: "onButtonOver",
    value: function onButtonOver() {
      console.log('mouseover');
    }
  }, {
    key: "onButtonOut",
    value: function onButtonOut(e) {
      console.log('mouseout', e);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('this.el', this.el);
      this.el.appendChild(this.app.view);
      var me = this;
      var offset = 0;
      this.props.items.forEach(function (item) {
        var g = new PIXI.Graphics();
        g.interactive = true;
        g.buttonMode = true;
        g.beginFill(0xFF3300);
        g.drawCircle(20 + offset, 20, 10);
        g.endFill();
        g.on('pointerdown', me.onButtonDown).on('pointerup', me.onButtonUp).on('pointerupoutside', me.onButtonUp).on('pointerover', me.onButtonOver).on('pointerout', me.onButtonOut);
        me.app.stage.addChild(g);
        offset += 30;
      });
      document.addEventListener('keydown', this.handleKeyDown, false);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {}
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var me = this;
      setInterval(function () {
        moveSomethingOnTheScreen(me.time);
        time += 1;
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: "adventure",
        ref: function ref(thisDiv) {
          _this2.el = thisDiv;
        },
        style: {
          width: '600px',
          height: '800px'
        },
        onKeyPress: this.handleKeyDown
      });
    }
  }]);

  return AdventureView;
}(_react["default"].Component);

exports["default"] = AdventureView;
;
AdventureView.propTypes = {
  items: _propTypes["default"].array
};