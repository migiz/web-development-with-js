import React from 'react';
import { default as I, List, Map, Range, Repeat } from 'immutable';

import CardApp from './CardApp';

const CardNames = React.createClass({

    render: function() {

        console.log(this.props.cards);

        var data = this.props.cards,
        input = this.props.filter.toLowerCase();

    // looping through each entry in the data array
    var cards = this.props.data.map(function(card, key) {

      // only display names that match current input string
      if (card.name.toLowerCase().indexOf(input)) {
        return;
      } else {
        return <li className={card.category} key={key}>{card.name}</li>;
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
