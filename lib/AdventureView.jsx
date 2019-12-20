import React from 'react';
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
        this.state = {
            currentSlide: 0,
        };

        this.app = new PIXI.Application();

        this.time = 0;
    }
    componentDidMount() {
        this.el.appendChild(this.app.view);

        const me = this;
        this.props.items.forEach(function(item) {
            const circle = new PIXI.Circle(10, 10, 10);
            console.log(item, circle);
            //me.app.stage.addChild(circle);
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
                     height: '400px'
                 }}
                 onKeyPress={this.handleKeyDown}>
            </div>
        );
    }
};
