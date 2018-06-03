import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { last } from 'ramda';
import AppSaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// !!!IMPORTANT!!! it is important that sagaMiddleware is last in the applied middleware so that we can assure that if the state is accessed from the sagaMiddleware the state will reflect the updated application state after the action is dispatched
const middlewares = [sagaMiddleware];
if (last(middlewares) !== sagaMiddleware) {
    throw Error('In store.js of store/index.js sagaMiddleware must be last middleware in the chain of redux middlewares');
}
const enhancers = composeEnhancers(applyMiddleware(...middlewares));
const AppStore = createStore(reducers, enhancers);

export { AppSaga, sagaMiddleware }
export default AppStore;
