import React from 'react';
import ReactDOM from 'react-dom';
import AdventureView from './AdventureView';
import Item from './Item';

const intro = [
    'You walk into the grocery store, and start craving German rye bread.'
];

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getRandomThing() {
        const things = [
            'pumkin spice coffee',
            'a santa hat',
            'a christmas tree',
            'a game gear with the lion king game that\'s really hard!!!'
        ];

        return things[Math.floor(Math.random() * things.length)];
    }
    render() {
        const click = function(e) {
            console.log(e.name);
        };
        const items = [<Item key={0} />];

        for (let i = 0; i < 5; i++) {
            items.push(
                <Item key={i + 1} name={this.getRandomThing()}
                      onClick={click} />
            );
        }

        return (
            <div className="col">
                <AdventureView
                    items={items} />
            </div>
        );
    }
    handleItemClick(event) {
        const target = event.target;
        const name = target.name;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const domContainer = document.querySelector('#react-container');
    ReactDOM.render(<Main />, domContainer);
});
