export const initialState = {
  loading: false,
  moduleNumber: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_NUMBER':
      return {
        ...state,
        loading: action.loading,
        moduleNumber: action.moduleNumber
      };
    default:
      return state;
  }
};

export default reducer;