import React from 'react';
import ReactDOM from 'react-dom';
import AdventureView from './AdventureView';
import Item from './Item';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const click = function() {
            const things = [
                'pumkin spice coffee',
                'a santa hat',
                'a christmas tree',
                'a game gear with the lion king game that\'s really hard!!!'
            ];

            // lel copy and paste from stack overflow FML
            const randomThing = things[
                Math.floor(Math.random() * things.length)];


            const msg = `lele hi :))))) I am ${randomThing}. Ask me anything :)`;
            console.log(msg);
            alert(msg);
        };
        const items = [
            <Item key={0} onClick={click} />
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
