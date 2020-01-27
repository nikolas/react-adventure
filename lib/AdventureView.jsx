import React from 'react';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js';


export class Item extends React.Component {
    render() {
        return <div className="adv-item"
                    height="20" width="20"></div>;
    }
};

export default class AdventureView extends React.Component {
    constructor(props) {
        super(props);

        this.app = new PIXI.Application({
            antialias: true
        });

        this.time = 0;
    }
    componentDidMount() {
        console.log('this.el', this.el);
        this.el.appendChild(this.app.view);

        const me = this;
        this.props.items.forEach(function(item) {
            const g = new PIXI.Graphics();
            g.interactive = true;
            g.beginFill(0xFF3300);
            g.drawCircle(Math.random() * 600,
                         Math.random() * 800,
                         Math.random() * 10);
            g.endFill();

            me.app.stage.addChild(g);
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
