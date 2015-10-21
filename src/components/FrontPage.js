import { Router, Route, Link, IndexRoute } from 'react-router';
import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Counterizer from './Counterizer';

const FrontPage = React.createClass({

    render: function() {

        const { count, names, onIncrementCounter } = this.props;

        return (

            <div>

                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer
                    {...this.props}
                />

                <Counter count={count}/>

            </div>
        );
    }

});

export default FrontPage;
