import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { createBrowserHistory } from 'history';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import configureStore from './store/configureStore';
import App from './App';
import './sass/main.scss';

OfflinePluginRuntime.install();

const graphQlHost = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/';

const networkInterface = createNetworkInterface({
  uri: graphQlHost
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface
});

const history = createBrowserHistory();
const store = configureStore(history);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <App history={history} />
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => render());
}
