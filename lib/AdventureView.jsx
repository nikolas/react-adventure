import React from 'react';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js';

const intro = [
    'You walk into the grocery store, and start craving German rye bread.'
];

export default class AdventureView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false
        };

        this.width = 640;
        this.height = 480;

        this.app = new PIXI.Application({
            antialias: true,
            width: this.width,
            height: this.height
        });

        this.time = 0;

        this.onTitleClick = this.onTitleClick.bind(this);
        this.play = this.play.bind(this);
    }
    onButtonDown() {
    }
    onButtonUp() {
        console.log('item clicked!');
    }
    onButtonOver() {
        console.log('mouseover');
    }
    onButtonOut(e) {
        console.log('mouseout', e);
    }
    onTitleClick() {
        console.log('setting state');
        this.setState({isPlaying: true});
    }
    setupTitleScreen() {
        const textStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: this.width - 40,
        });

        const text = new PIXI.Text('Welcome to react-adventure', textStyle);
        text.x = 20;
        text.y = 20;

        this.app.stage.addChild(text);

        const startText = new PIXI.Text('Start', textStyle);
        startText.buttonMode = true;
        startText.interactive = true;
        startText.x = (this.width / 2) - (startText.width / 2);
        startText.y = this.height / 2;

        startText.on('click', this.onTitleClick);

        this.app.stage.addChild(startText);
    }
    //The `keyboard` helper function
    keyboard(keyCode) {
        var key = {};
        key.code = keyCode;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        //The `downHandler`
        key.downHandler = function(event) {
            if (event.keyCode === key.code) {
                if (key.isUp && key.press) key.press();
                key.isDown = true;
                key.isUp = false;
            }
            event.preventDefault();
        };

        //The `upHandler`
        key.upHandler = function(event) {
            if (event.keyCode === key.code) {
                if (key.isDown && key.release) key.release();
                key.isDown = false;
                key.isUp = true;
            }
            event.preventDefault();
        };

        //Attach event listeners
        window.addEventListener(
            "keydown", key.downHandler.bind(key), false
        );
        window.addEventListener(
            "keyup", key.upHandler.bind(key), false
        );
        return key;
    }
    setupSceneOne() {
        const me = this;

        this.explorer = PIXI.Sprite.from('../img/explorer.png');
        this.explorer.x = 68;
        this.explorer.y = (this.height / 2) - (this.explorer.height / 2);
        this.explorer.vx = 0;
        this.explorer.vy = 0;
        this.app.stage.addChild(this.explorer);

        //Capture the keyboard arrow keys
        let left = this.keyboard(37),
            up = this.keyboard(38),
            right = this.keyboard(39),
            down = this.keyboard(40);

        //Left arrow key `press` method
        left.press = function() {

            //Change the explorer's velocity when the key is pressed
            me.explorer.vx = -5;
            me.explorer.vy = 0;
        };

        //Left arrow key `release` method
        left.release = function() {

            //If the left arrow has been released, and the right arrow isn't down,
            //and the explorer isn't moving vertically:
            //Stop the explorer
            if (!right.isDown && me.explorer.vy === 0) {
                me.explorer.vx = 0;
            }
        };

        //Up
        up.press = function() {
            me.explorer.vy = -5;
            me.explorer.vx = 0;
        };
        up.release = function() {
            if (!down.isDown && me.explorer.vx === 0) {
                me.explorer.vy = 0;
            }
        };

        //Right
        right.press = function() {
            me.explorer.vx = 5;
            me.explorer.vy = 0;
        };
        right.release = function() {
            if (!left.isDown && me.explorer.vy === 0) {
                me.explorer.vx = 0;
            }
        };

        //Down
        down.press = function() {
            me.explorer.vy = 5;
            me.explorer.vx = 0;
        };
        down.release = function() {
            if (!up.isDown && me.explorer.vx === 0) {
                me.explorer.vy = 0;
            }
        };

        const textStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: this.width - 40,
        });

        const text = new PIXI.Text(intro, textStyle);
        text.buttonMode = true;
        text.interactive = true;
        text.x = 20;
        text.y = 20;

        this.app.stage.addChild(text);

        let offset = 0;
        this.props.items.forEach(function() {
            const g = new PIXI.Graphics();
            g.interactive = true;
            g.buttonMode = true;
            g.beginFill(0xFF3300);
            g.drawCircle(30 + offset, me.height - 30, 20);
            g.endFill();
            g.on('pointerdown', me.onButtonDown)
                .on('pointerup', me.onButtonUp)
                .on('pointerupoutside', me.onButtonUp)
                .on('pointerover', me.onButtonOver)
                .on('pointerout', me.onButtonOut);

            me.app.stage.addChild(g);
            offset += 50;
        });

        this.app.ticker.add(delta => this.play(delta));
    }
    componentDidMount() {
        console.log('this.el', this.el);
        this.el.appendChild(this.app.view);
        this.refreshScene();
    }
    refreshScene() {
        for (let i = this.app.stage.children.length - 1; i >= 0; i--) {
            this.app.stage.removeChild(this.app.stage.children[i]);
        }

        if (!this.state.isPlaying) {
            this.setupTitleScreen();
        } else {
            this.setupSceneOne();
            console.log('refresh');
        }
    }
    play(delta) {
        //use the explorer's velocity to make it move
        this.explorer.x += this.explorer.vx;
        this.explorer.y += this.explorer.vy;
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isPlaying !== prevState.isPlaying) {
            this.refreshScene();
        }
    }
    gameLoop() {
        setInterval(function() {
            //moveSomethingOnTheScreen(me.time);

            //time += 1;
        }, 1000);

    }
    render() {
        return (
            <div className="adventure"
                 ref={(thisDiv) => {this.el = thisDiv}}
                 style={{
                     width: this.width + 'px',
                     height: this.height + 'px'
                 }}
                 onKeyPress={this.handleKeyDown}>
            </div>
        );
    }
}

AdventureView.propTypes = {
    items: PropTypes.array
};
