import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (count) => {
  return {
    type: actionTypes.ADD,
    value: count,
  };
};

export const subtract = (count) => {
  return {
    type: actionTypes.SUBTRACT,
    value: count,
  };
};