import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware =[thunk];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  ));


export default store;