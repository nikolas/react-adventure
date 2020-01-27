import React from 'react';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js';

const intro = [
    'You walk into the grocery store, and start craving German rye bread.'
];

export default class AdventureView extends React.Component {
    constructor(props) {
        super(props);

        this.app = new PIXI.Application({
            antialias: true
        });

        this.width = 800;
        this.height = 600;

        this.time = 0;
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
    componentDidMount() {
        console.log('this.el', this.el);
        this.el.appendChild(this.app.view);

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

        const me = this;
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

        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    handleKeyDown() {
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
