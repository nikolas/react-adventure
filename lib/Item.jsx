import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
    render() {
        const w = 30;
        const h = 30;
        return (
            <div className="adv-item"
                 width={w} height={h}
                 onClick={this.props.onClick}>
                {this.props.name}
            </div>
        );
    }
};

Item.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
};
