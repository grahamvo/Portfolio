import React from 'react';
import { match, RouterContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import hogan from 'hogan-express';
import { Provider } from 'react-redux';
import createStore from './src/redux/createStore';

// Routes
import routes from './routes';

// Express
const app = express();
app.engine('html', hogan);
app.set('views', __dirname + '/views');
app.use('/', express.static(__dirname + '/public/'));
app.set('port', (process.env.PORT || 3000));
console.info(__dirname);
app.get('*', (req, res) => {
    const store = createStore();
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        const newRes = res;

        if (error) {
            newRes.status(500).send(error.message);
        } else if (redirectLocation) {
            newRes.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const reactMarkup = ReactDOMServer.renderToStaticMarkup(
                <Provider store={ store }>
                    <RouterContext { ...renderProps } />
                </Provider>
            );

            newRes.locals.reactMarkup = reactMarkup;
          // Success!
            newRes.status(200).render('index.html');
        } else {
            newRes.status(404).render('index.html');
        }
    });
});

app.listen(app.get('port'));

console.info('==> Server is listening in ' + process.env.NODE_ENV + ' mode')
console.info('==> Go to http://localhost:%s', app.get('port'))
