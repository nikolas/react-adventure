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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var intro = [];

var AdventureView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdventureView, _React$Component);

  function AdventureView(props) {
    var _this;

    _classCallCheck(this, AdventureView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdventureView).call(this, props));
    _this.state = {
      isPlaying: false
    };
    _this.width = 640;
    _this.height = 480;
    _this.app = new PIXI.Application({
      antialias: true,
      width: _this.width,
      height: _this.height
    });
    _this.time = 0;
    _this.onTitleClick = _this.onTitleClick.bind(_assertThisInitialized(_this));
    _this.play = _this.play.bind(_assertThisInitialized(_this));
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
    key: "onTitleClick",
    value: function onTitleClick() {
      console.log('setting state');
      this.setState({
        isPlaying: true
      });
    }
  }, {
    key: "setupTitleScreen",
    value: function setupTitleScreen() {
      var textStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 24,
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'],
        // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: this.width - 40
      });
      var text = new PIXI.Text('Welcome to react-adventure', textStyle);
      text.x = 20;
      text.y = 20;
      this.app.stage.addChild(text);
      var startText = new PIXI.Text('Start', textStyle);
      startText.buttonMode = true;
      startText.interactive = true;
      startText.x = this.width / 2 - startText.width / 2;
      startText.y = this.height / 2;
      startText.on('click', this.onTitleClick);
      this.app.stage.addChild(startText);
    } //The `keyboard` helper function

  }, {
    key: "keyboard",
    value: function keyboard(keyCode) {
      var key = {};
      key.code = keyCode;
      key.isDown = false;
      key.isUp = true;
      key.press = undefined;
      key.release = undefined; //The `downHandler`

      key.downHandler = function (event) {
        if (event.keyCode === key.code) {
          if (key.isUp && key.press) key.press();
          key.isDown = true;
          key.isUp = false;
        }

        event.preventDefault();
      }; //The `upHandler`


      key.upHandler = function (event) {
        if (event.keyCode === key.code) {
          if (key.isDown && key.release) key.release();
          key.isDown = false;
          key.isUp = true;
        }

        event.preventDefault();
      }; //Attach event listeners


      window.addEventListener("keydown", key.downHandler.bind(key), false);
      window.addEventListener("keyup", key.upHandler.bind(key), false);
      return key;
    }
  }, {
    key: "setupSceneOne",
    value: function setupSceneOne() {
      var _this2 = this;

      var me = this;
      this.explorer = PIXI.Sprite.from('img/explorer.png');
      this.explorer.x = 68;
      this.explorer.y = this.height / 2 - this.explorer.height / 2;
      this.explorer.vx = 0;
      this.explorer.vy = 0;
      this.app.stage.addChild(this.explorer); //Capture the keyboard arrow keys

      var left = this.keyboard(37),
          up = this.keyboard(38),
          right = this.keyboard(39),
          down = this.keyboard(40); //Left arrow key `press` method

      left.press = function () {
        //Change the explorer's velocity when the key is pressed
        me.explorer.vx = -5;
        me.explorer.vy = 0;
      }; //Left arrow key `release` method


      left.release = function () {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the explorer isn't moving vertically:
        //Stop the explorer
        if (!right.isDown && me.explorer.vy === 0) {
          me.explorer.vx = 0;
        }
      }; //Up


      up.press = function () {
        me.explorer.vy = -5;
        me.explorer.vx = 0;
      };

      up.release = function () {
        if (!down.isDown && me.explorer.vx === 0) {
          me.explorer.vy = 0;
        }
      }; //Right


      right.press = function () {
        me.explorer.vx = 5;
        me.explorer.vy = 0;
      };

      right.release = function () {
        if (!left.isDown && me.explorer.vy === 0) {
          me.explorer.vx = 0;
        }
      }; //Down


      down.press = function () {
        me.explorer.vy = 5;
        me.explorer.vx = 0;
      };

      down.release = function () {
        if (!up.isDown && me.explorer.vx === 0) {
          me.explorer.vy = 0;
        }
      };

      var textStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 24,
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'],
        // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: this.width - 40
      });
      /*const text = new PIXI.Text(intro, textStyle);
      text.buttonMode = true;
      text.interactive = true;
      text.x = 20;
      text.y = 20;
       this.app.stage.addChild(text);*/

      var offset = 0;
      this.props.items.forEach(function () {
        var g = new PIXI.Graphics();
        g.interactive = true;
        g.buttonMode = true;
        g.beginFill(0xFF3300);
        g.drawCircle(30 + offset, me.height - 30, 20);
        g.endFill();
        g.on('pointerdown', me.onButtonDown).on('pointerup', me.onButtonUp).on('pointerupoutside', me.onButtonUp).on('pointerover', me.onButtonOver).on('pointerout', me.onButtonOut);
        me.app.stage.addChild(g);
        offset += 50;
      });
      this.app.ticker.add(function (delta) {
        return _this2.play(delta);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('this.el', this.el);
      this.el.appendChild(this.app.view);
      this.refreshScene();
    }
  }, {
    key: "refreshScene",
    value: function refreshScene() {
      for (var i = this.app.stage.children.length - 1; i >= 0; i--) {
        this.app.stage.removeChild(this.app.stage.children[i]);
      }

      if (!this.state.isPlaying) {
        this.setupTitleScreen();
      } else {
        this.setupSceneOne();
        console.log('refresh');
      }
    }
  }, {
    key: "play",
    value: function play(delta) {
      //use the explorer's velocity to make it move
      this.explorer.x += this.explorer.vx;
      this.explorer.y += this.explorer.vy;
      this.contain(this.explorer, {
        x: 28,
        y: 10,
        width: this.width,
        height: this.height
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.isPlaying !== prevState.isPlaying) {
        this.refreshScene();
      }
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      setInterval(function () {//moveSomethingOnTheScreen(me.time);
        //time += 1;
      }, 1000);
    }
  }, {
    key: "contain",
    value: function contain(sprite, container) {
      var collision = undefined; //Left

      if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
      } //Top


      if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
      } //Right


      if (sprite.x + sprite.width > container.width) {
        sprite.x = container.width - sprite.width;
        collision = "right";
      } //Bottom


      if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision = "bottom";
      } //Return the `collision` value


      return collision;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement("div", {
        className: "adventure",
        ref: function ref(thisDiv) {
          _this3.el = thisDiv;
        },
        style: {
          width: this.width + 'px',
          height: this.height + 'px'
        },
        onKeyPress: this.handleKeyDown
      });
    }
  }]);

  return AdventureView;
}(_react["default"].Component);

exports["default"] = AdventureView;
AdventureView.propTypes = {
  items: _propTypes["default"].array
};