var Firebase = require("firebase");

const AllCards_Ref = new Firebase("https://crackling-inferno-3641.firebaseio.com/");
const Basic_Ref = new Firebase("https://crackling-inferno-3641.firebaseio.com/Basic");
const BRM_Ref = new Firebase("https://crackling-inferno-3641.firebaseio.com/Blackrock%20Mountain");
const Classic_Ref = new Firebase("https://crackling-inferno-3641.firebaseio.com/Classic");

export default {
    getBasicCards: function() {
        return Basic_Ref.orderByChild("/cost").on("child_added", function(snapshot) {
            console.log(snapshot.key() + " costs " + snapshot.val().cost + " mana");
        });
    },
};
