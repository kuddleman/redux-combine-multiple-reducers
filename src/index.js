import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import serviceWorker from './serviceWorker'

//import reducer from './store/reducer'
import ReducerA from './store/reducerA'
import ReducerB from './store/reducerB'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  rA: ReducerA,
  rB: ReducerB
})

const store = createStore( rootReducer )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//serviceWorker()


