import React from 'react';

const DetailsPage = React.createClass({
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
        } = this.props.params;

        return (
            <h2>
                HellooOOoo {name}
            </h2>
        );
    }
});

export default DetailsPage;
