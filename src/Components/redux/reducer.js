const initialState = {
  balance: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'WITHDRAW':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'ADD_INTEREST':
      return {
        ...state,
        balance: state.balance * 1.05,
      };
    case 'APPLY_CHARGES':
      return {
        ...state,
        balance: state.balance * 0.85,
      };
    default:
      return state;
  }
};

export default reducer;
