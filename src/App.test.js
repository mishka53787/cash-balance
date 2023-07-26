import React from 'react';
import { render } from '@testing-library/react';
import BalanceContainer from './Components/BalanceContainer';
import { Provider } from 'react-redux';
import store from './Components/redux/store';

describe('BalanceContainer', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BalanceContainer />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('handles button click correctly', () => {
    render(
      <Provider store={store}>
        <BalanceContainer />
      </Provider>
    );
    // Add assertions here for button click functionality
  });
});


// ! wont pass because your App.js file no longer containers the words "learn react"
describe('App', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByRole('link', { name: /learn react/i });
    expect(linkElement).toBeInTheDocument();
  });
});

describe('BalanceContainer', () => {
  test('renders component correctly', () => {
    render(
      <Provider store={store}>
        <BalanceContainer />
      </Provider>
    );
    // Add assertions here
  });

  test('handles button click correctly', () => {
    render(
      <Provider store={store}>
        <BalanceContainer />
      </Provider>
    );
    // Add assertions here
  });
});

// jest.config.js
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
