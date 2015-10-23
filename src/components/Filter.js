import React from 'react';
import { default as I, List, Map, Range, Repeat } from 'immutable';

import CardApp from './CardApp';

const Filter = React.createClass({

    filterTrigger() {
    // sending the new filter value to the parent component
    this.props.filterUpdate(this.refs.filterInput.getDOMNode().value);
  },
  render() {
    return (
      <form>
        <input
          type='text'
          ref='filterInput'
          placeholder='Type to filter..'
          /* binding the input value to state */
          value={this.props.filterVal}
          onChange={this.filterTrigger}
        />
      </form>
    )
  }
});

export default Filter;
