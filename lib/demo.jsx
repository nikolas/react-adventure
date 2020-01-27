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
    render() {
        const click = function(e) {
            console.log(e.name);
        };
        const items = [
            {
                name: 'A'
            },
            {
                name: 'B'
            },
            {
                name: 'A'
            },
            {
                name: 'B'
            },
            {
                name: 'A'
            }
        ];

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
