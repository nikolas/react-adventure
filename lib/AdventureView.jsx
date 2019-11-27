import React from 'react';

const slides = [
    {
        'img': 'img/1.png'
    },
    {
        'img': 'img/2.png'
    },
    {
        'img': 'img/3.png'
    },
    {
        'img': 'img/4.png'
    },
    {
        'img': 'img/51.png'
    },
    {
        'img': 'img/5.png'
    },
    {
        'img': 'img/6.png'
    }
];


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
        if (this.props.slideshow.state.currentSlide >= slides.length - 1) {
            disabled = true;
        }
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
            currentSlide: 0
        };
    }
    prevSlide() {
        let newSlide = this.state.currentSlide;
        if (this.state['currentSlide'] > 0) {
            newSlide = newSlide - 1;
        }
        this.setState({'currentSlide': newSlide});
    }
    nextSlide() {
        let newSlide = this.state.currentSlide;
        if (this.state.currentSlide < slides.length - 1) {
            newSlide = newSlide + 1;
        }
        this.setState({'currentSlide': newSlide});
    }
    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    handleKeyDown(e) {
        if (e.keyCode === 37) {
            this.prevSlide();
        } else if (e.keyCode === 39) {
            this.nextSlide();
        }
    }
    render() {
        return (
            <div className="adventure"
                 onKeyPress={this.handleKeyDown}>
            </div>
        );
    }
};
