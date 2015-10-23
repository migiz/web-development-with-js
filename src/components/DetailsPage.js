import React from 'react';
import { default as I, List, Map, Range, Repeat } from 'immutable';

export default React.createClass({
    render: function() {
        const { id,
         name,
         description,
         image_url,
         hero,
         category,
         quality,
         race,
         set,
         mana,
         attack,
         health,
         collectible,
        } = this.props;

        console.log(this.props);
        console.log(this.props.params.id);

        return (
            <h2>
                HellooOOoo {this.props.params.id}
            </h2>
        );
    }
});

