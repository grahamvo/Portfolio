import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/js/App';
import Home from './src/js/home/Home';
import About from './src/js/about/About';
import Work from './src/js/work/Work';
import Contact from './src/js/contact/Contact';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="about" component={ About } />
        <Route path="work" component={ Work } />
        <Route path="contact" component={ Contact } />
        {/*
        <Route path="*" component={ NoMatch } />*/}
    </Route>
);
