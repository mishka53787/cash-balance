import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from './redux/actions';

const BalanceContainer = () => {
  const [amount, setAmount] = useState('');
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    if (amount) {
      dispatch(deposit(parseFloat(amount)));
      setAmount('');
    }
  };

  const handleWithdraw = () => {
    if (amount) {
      dispatch(withdraw(parseFloat(amount)));
      setAmount('');
    }
  };

  // Rest of the component code
};

export default BalanceContainer;
;

