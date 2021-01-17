import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

let initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) });
    case actionTypes.DELETE_RESULT:
      // let newArr = [...state.results];
      // newArr.splice(id, 1);
      let updatedArr = state.results.filter(result => result.id !== action.id);
      return updateObject(state, { results: updatedArr });
    default:
      return state;
  }
};

export default reducer;