const initialState = {
  repositories: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_REPOSITORIES':
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
