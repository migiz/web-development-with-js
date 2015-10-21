import axios from 'axios';

export default {
    getTussit: function() {
    return axios.get('/api/tussi').then((response) => {
        return response.data;
      });
    },
    getCards: function() {
        return axios.get('/api/cards').then((response) => {
        return response.data;
      });
    }
};
