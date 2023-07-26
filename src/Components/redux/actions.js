export const deposit = (amount) => {
  return {
    type: 'DEPOSIT',
    payload: amount,
  };
};

export const withdraw = (amount) => {
  return {
    type: 'WITHDRAW',
    payload: amount,
  };
};

export const addInterest = () => {
  return {
    type: 'ADD_INTEREST',
  };
};

export const applyCharges = () => {
  return {
    type: 'APPLY_CHARGES',
  };
};
