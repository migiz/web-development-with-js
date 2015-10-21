import React from 'react';
import api from '../api';

const CardApp = React.createClass({

    getInitialState: function() {
        return {
            cards: [],
        };
    },

    componentDidMount: function() {
        api.getCards().then((data) => {
            this.setState({
                cards: data
            });
        });
    },

    render: function() {
        const cards = this.state.cards;

        return (
            <div>
                <h1>Search</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        cards: this.state.cards
                    }
                )}
            </div>
        );
    },
});

export default CardApp;
