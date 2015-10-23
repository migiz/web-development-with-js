import React from 'react';
import { default as I, List, Map, Range, Repeat } from 'immutable';
import { Link } from 'react-router';

import CardApp from './CardApp';
import App from './App';

const CardNames = React.createClass({

    render: function() {

        const data = this.props.data,
        input = this.props.filter.toLowerCase();

        const cards = this.props.data.map(function(card, key) {

        if (card.name.toLowerCase().indexOf(input)) {
            return;
        } else {

        // datan korjailua
        if(card.hasOwnProperty('type')) {
            card.category = card.type;
        }
        if(card.description.includes('Secret:')) {
            card.category = 'secret';
        }

        return <li className={card.category} key={key}>
            <Link to={`/card/${card.id}`}>
                {card.name}
            </Link>
        </li>;
      }
    });
    return (
      <ul>
        {cards}
      </ul>
    )
  }
});

export default CardNames;
