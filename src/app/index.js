/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from 'Route';
import store from 'Store';
import ReactDOM from 'react-dom';
import 'Style/main';

// Disable react dev tools in production
if (process.env.NODE_ENV === 'production'
    && window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    && Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
) window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};

// Enable React hot reload in development
if (process.env.NODE_ENV === 'development') {
    module.hot.accept('./index.js', () => {
        // eslint-disable-next-line import/no-self-import, global-require
        const NextRootContainer = require('./index.js').default;
        ReactDOM.render(<NextRootContainer />, document.getElementById('root'));
    });
}

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

import MyAccount from 'Store/MyAccount/MyAccount.dispatcher';

MyAccount.createAccount({
    customer: {
        firstname: 'Alfred',
        lastname: 'Genkin',
        email: `alfreds+${ Math.random().toString(36).substring(7) }@scandiweb.com`
    },
    password: 'Alfredo123+'
});
