let initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case 'DELETE_RESULT':
      // let newArr = [...state.results];
      // newArr.splice(id, 1);
      return {
        ...state,
        //results: newArr,
      }
    default:
      return state;
  }
};

export default reducer;