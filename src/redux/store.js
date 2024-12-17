import reducers from "./reducers/index";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk }from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
);

export default store;