import { Router, Route, Link, IndexRoute } from 'react-router';
import React from 'react';
import { default as I, List, Map, Range, Repeat } from 'immutable';

import CardApp from './CardApp';

const CardPage = React.createClass({

    render: function() {

        const { cards } = this.props;
        let cardList = List(cards);

        return (

            <li>

                {cards.map((card, i) =>
                    card.name
                )}

            </li>
        );
    },

});

export default CardPage;
