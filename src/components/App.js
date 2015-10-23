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
        {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        cards: this.state.cards,
                        filterText: this.state.filterText,
                        stateUpdate: this.stateUpdate

                    }
                )}
      </div>
    )
  }
});

export default App;
