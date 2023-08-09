import React from 'react';
import './App.css';
import BalanceContainer from './Components/BalanceContainer';
import { Provider } from 'react-redux';
import AppWithProvider from  './Components/store';

const App = () => {
  return (
    <Provider store={AppWithProvider}>
      <div className="App">
        <BalanceContainer />
      </div>
    </Provider>
  );
};

export default App;





