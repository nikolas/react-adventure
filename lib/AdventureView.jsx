import React from 'react';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js';

export default class AdventureView extends React.Component {
    constructor(props) {
        super(props);

        this.app = new PIXI.Application({
            antialias: true
        });

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

        const me = this;
        let offset = 0;
        this.props.items.forEach(function(item) {
            const g = new PIXI.Graphics();
            g.interactive = true;
            g.buttonMode = true;
            g.beginFill(0xFF3300);
            g.drawCircle(20 + offset, 20, 10);
            g.endFill();
            g.on('pointerdown', me.onButtonDown)
                .on('pointerup', me.onButtonUp)
                .on('pointerupoutside', me.onButtonUp)
                .on('pointerover', me.onButtonOver)
                .on('pointerout', me.onButtonOut);

            me.app.stage.addChild(g);
            offset += 30;
        });

        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    handleKeyDown(e) {
    }
    gameLoop() {
        const me = this;

        setInterval(function() {
            moveSomethingOnTheScreen(me.time);

            time += 1;
        }, 1000);

    }
    render() {
        return (
            <div className="adventure"
                 ref={(thisDiv) => {this.el = thisDiv}}
                 style={{
                     width: '600px',
                     height: '800px'
                 }}
                 onKeyPress={this.handleKeyDown}>
            </div>
        );
    }
};

AdventureView.propTypes = {
    items: PropTypes.array
};
