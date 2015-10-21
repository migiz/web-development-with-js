import React from 'react';

const GreeterPage = React.createClass({
    render: function() {
        const { name } = this.props.params;

        return (
            <h2>
                HellooOOoo {name}
            </h2>
        );
    }
});

export default GreeterPage;
