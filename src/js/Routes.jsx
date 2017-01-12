import React, {Component, PropTypes} from 'react';
import {Router, Route, Redirect} from 'react-router';
import App from './App';
import Maintenance from './components/maintenance/Maintenance';

export default class Routes extends Component {
    static propTypes = {
        history: PropTypes.object,
    }

    render() {
        return (
            <Router history={this.props.history}>
                <Redirect from="/" to="maintenance" />
                <Route component={App} path="/">
                    <Route component={Maintenance} path="maintenance" />
                    <Redirect from="*" to="maintenance" />
                </Route>
            </Router>
        );
    }
}
