import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div className="ruma">
                {this.props.count}
            </div>
        );
    }
};

export default Counter;