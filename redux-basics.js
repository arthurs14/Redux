const redux = require('redux');
let createStore = redux.createStore;

let initialState = {
  counter: 0,
};

// Reducer
let rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
}

// Store
let store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 5 });
console.log(store.getState());


// Subscription