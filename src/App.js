import React from 'react';
import './App.css';
import BalanceContainer from './Components/BalanceContainer';
// ! import the Provider component from react-redux since it was returning undefined error
import { Provider } from 'react-redux';
// ! import the store component from react-redux since it was returning undefined ee';
import store from './'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BalanceContainer />
      </div>
    </Provider>
  );
};

export default App;





