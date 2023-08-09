import React from 'react';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import BalanceContainer from './BalanceContainer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const AppWithProvider = () => (
  <Provider store={store}>
    <BalanceContainer />
  </Provider>
);

export default AppWithProvider;

