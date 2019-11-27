import React from 'react';


export class PrevButton extends React.Component {
    render() {
        let disabled = false;
        if (this.props.slideshow.state.currentSlide <= 0) {
            disabled = true;
        }
        return (
            <button disabled={disabled}
                    className="prev"
                    onClick={this.handleClick}>
                {disabled ?
                 String.fromCharCode(8602) :
                 String.fromCharCode(8612)}
            </button>
        );
    }
    handleClick(e) {
        this.props.slideshow.prevSlide();
    }
};

export class NextButton extends React.Component {
    render() {
        let disabled = false;
        return (
            <button disabled={disabled}
                    className="next"
                    onClick={this.handleClick}>
                {disabled ?
                 String.fromCharCode(8603) :
                 String.fromCharCode(8614)}
            </button>
        );
    }
    handleClick(e) {
        this.props.slideshow.nextSlide();
    }
};

export class SlideDisplay extends React.Component {
    render() {
        let slide = this.props.slides[this.props.currentSlide];
        return (
            <div className="slide">
                <div className="img"
                     style={{
                         backgroundImage: 'url(' + slide.img + ')',
                         height: window.innerHeight
                     }} />
            </div>
        );
    }
};

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

        this.time = 0;
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    handleKeyDown(e) {
        if (e.keyCode === 37) {
            this.prevSlide();
        } else if (e.keyCode === 39) {
            this.nextSlide();
        }
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
                 style={{
                     width: '600px',
                     height: '400px'
                 }}
                 onKeyPress={this.handleKeyDown}>
                {this.props.items}
            </div>
        );
    }
};
