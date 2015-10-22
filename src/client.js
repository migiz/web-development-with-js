import './client1.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Router, Route, Link, IndexRoute } from 'react-router';

import GreeterPage from './components/GreeterPage';
import HelloWorldApp from './components/HelloWorldApp';
import FrontPage from './components/FrontPage';

import CardApp from './components/CardApp';
import CardPage from './components/CardPage';
import App from './components/App';
import api from './api';

const data = api.getCards();

const Routes = (
    <Router>
        <Route path="/" component={App} data={data}>
            <IndexRoute component={CardPage} />
            <Route path="/hello/:name" component={GreeterPage}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    Routes,
    document.getElementById('app')
);
