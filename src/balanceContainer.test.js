import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BalanceContainer from  './Components/BalanceContainer';

const mockStore = configureStore([]);

// Import jest-fetch-mock at the top
import fetchMock from 'jest-fetch-mock';

// Initialize jest-fetch-mock
fetchMock.enableMocks();

describe('BalanceContainer', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ balance: 0 });
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <BalanceContainer />
      </Provider>
    );

    // Add assertions here to test the rendering and presence of specific elements
  });

  test('handles button click correctly', async () => {
    // Mock the fetch requests for deposit and withdraw
    fetchMock.mockResponseOnce(JSON.stringify({ amount: 100 }));
    fetchMock.mockResponseOnce(JSON.stringify({ amount: 50 }));

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <BalanceContainer />
      </Provider>
    );

    // Simulate button clicks and check the expected changes
    const depositButton = getByText(/deposit/i);
      const withdrawButton = getByText(/withdraw/i);
    const amountInput = getByPlaceholderText('Enter amount');

    // Test deposit functionality
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(depositButton);

    // Wait for the fetch request and dispatched action
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check the expected changes in the store
    expect(store.getActions()).toEqual([{ type: 'DEPOSIT', payload: 100 }]);
    expect(amountInput.value).toBe('');

    // Test withdraw functionality
    fireEvent.change(amountInput, { target: { value: '50' } });
    fireEvent.click(withdrawButton);

    // Wait for the fetch request and dispatched action
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check the expected changes in the store
    expect(store.getActions()).toEqual([{ type: 'WITHDRAW', payload: 50 }]);
    expect(amountInput.value).toBe('');
  });
});
;

