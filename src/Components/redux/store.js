// Store.js
import React from 'react';
import { createStore } from 'redux';
import reducer from './reducer';
import BalanceContainer from '../BalanceContainer'; // Assuming this is your actual component

import { Provider } from 'react-redux';

const store = createStore(reducer);

const AppWithProvider = () => (
  <Provider store={store}>
    <BalanceContainer />
  </Provider>
);

export default AppWithProvider;
