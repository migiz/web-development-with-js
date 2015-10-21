import { Router, Route, Link, IndexRoute } from 'react-router';
import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Counterizer from './Counterizer';

import CardApp from './CardApp';

const CardPage = React.createClass({

    render: function() {

        console.log(this.props);

        const { cards } = this.props;

//<CardApp key={i} card={card}/>

        return (

            <div>

                {cards.Basic.map((card, i) =>
                    i
                )}

            </div>
        );
    }

});

export default CardPage;
