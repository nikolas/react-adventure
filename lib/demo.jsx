import React from 'react';
import ReactDOM from 'react-dom';
import AdventureView from './AdventureView';
import Item from './Item';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moonPhase: -1
        };
    }
    render() {
        const items = [
            <Item />
        ];
        return (
            <div className="col-sm-6">
                <div className="text-center">
                    <AdventureView
                    items={items}
                    />
                </div>
            </div>
        );
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const domContainer = document.querySelector('#react-container');
    ReactDOM.render(<Main />, domContainer);
});
