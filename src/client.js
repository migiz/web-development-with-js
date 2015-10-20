require('./client.css');

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


function getTussit() {
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}

const tussit = getTussit();


console.log('kvaak sanoo ankka!');

const HelloWorld = React.createClass({  // Hello "nimi"
    render: function() {
        return(<div>Hello {this.props.name}</div>);
    }
});

const Counterizer = React.createClass( {       //laskuri
    render: function() {
        const { count, names, onIncrementCounter } = this.props;
        //ylempi nappaa propseista aaltosuluissa olevat muuttujat käyttöön
        return (
            <div className="testi">
                {count}
                <button
                    onClick={onIncrementCounter}>
                    MOAR!
                </button>
            </div>
        );
    }

});

const MegaCounterizer = React.createClass({  //alempi kopio laskurista
    render: function() {
        return (
            <div className="ruma">
                {this.props.count}
            </div>
        );
    },
});

const HelloWorldApp = React.createClass( {  //sovellus
    getInitialState: function() {
        return {
            count: 0,
            name: "pekkis",
            names: []
        };
    },   // <-- huom pilkku

    componentDidMount: function() {
        getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    render: function() {
        const names = this.state.names;
        return (
            <div>
                <h1>haloo</h1>

                {names.map((name, i) =>
                    <HelloWorld name={name} key={i}/>
                )}
                <Counterizer
                    count={this.state.count}
                    onIncrementCounter={this.incrementCounter}/>
                <MegaCounterizer
                    count={this.state.count}/>
            </div>
        );
    },
    incrementCounter: function() {
        this.setState( {
            count: this.state.count + 1
        });
    }
});

ReactDOM.render(<HelloWorldApp/>, document.getElementById('app'));
