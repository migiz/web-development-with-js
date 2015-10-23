getType: function(card) {
        if(card.hasOwnProperty('type')) {
            const ret = card.type;
            return ret;
        } else {
            const ret = card.category;
            return ret;
        }
    }
