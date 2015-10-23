import React from 'react';

import Filter from './Filter';
import CardNames from './CardNames';


export default React.createClass({
    render: function () {
        return (
            <div>
            <header>
          <Filter
            filterVal={this.props.filterText}
            filterUpdate={this.props.stateUpdate}
          />
        </header>
        <CardNames data={this.props.cards} filter={this.props.filterText} />
        </div>
        );
    }
})
