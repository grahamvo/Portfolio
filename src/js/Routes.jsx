import React from 'react';
import {Route, Redirect} from 'react-router';
import App from './App';
import Maintenance from './components/maintenance/Maintenance';

export default (
    <Route component={ App }>
        <Route path="maintenance" component={Maintenance} />
        <Redirect from="*" to="maintenance" />
    </Route>
);
