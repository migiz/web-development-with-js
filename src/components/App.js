import React from 'react';
import { default as I, List, Map, Range, Repeat } from 'immutable';


import Filter from './Filter';
import CardNames from './CardNames';
import CardApp from './CardApp';
import api from '../api';

const App = React.createClass({

  getInitialState() {
    return {
        filterText: '',
        cards: [],
    }
    },

  stateUpdate(value){
    this.setState({ filterText: value });
  },
    componentDidMount: function() {
        api.getCards().then((data) => {
            this.setState({
                cards: data
            });
        });
    },

  render() {
    return (
      <div>
        <header>
          <Filter
            filterVal={this.state.filterText}
            filterUpdate={this.stateUpdate}
          />
        </header>
        <CardNames data={this.state.cards} filter={this.state.filterText} />
      </div>
    )
  }
});

export default App;
