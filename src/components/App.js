import React from 'react';
import { default as I, List, Map, Range, Repeat } from 'immutable';

import CardApp from './CardApp';

const App = React.createClass({

  getInitialState() {
    return { filterText: '' }
  },
  // the 'value' param below = value of input field, sent from Filter component via the filterTrigger method
  stateUpdate(value){
    this.setState({ filterText: value });
  },
  render() {
    return (
      <div>
        <header>
          <Filter
            // passing down state into Filter component via props
            filterVal={this.state.filterText}
            filterUpdate={this.stateUpdate}
          />
        </header>
        <CardNames data={this.props.data} filter={this.state.filterText} />
      </div>
    )
  }
});

export default App;
