const redux = require('redux');
let createStore = redux.createStore;

let initialState = {
  counter: 0,
};

// Reducer
let rootReducer = (state = initialState, action) => {
  return state;
}

// Store
let store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action

// Subscription