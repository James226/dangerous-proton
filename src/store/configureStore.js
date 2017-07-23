import { createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import sagas from './sagas';

export default function configureStore(history) {
  const saga = createSagaMiddleware();
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        saga
      ),
    persistState('values')
    )
  );

  saga.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
