import * as constant from "./constants";

export const increment = (value) => {
  return {
    type: constant.INC,
    value: value,
  };
};

export const decrement = (value) => {
  return {
    type: constant.DEC,
    value: value,
  };
};

export const decrementCheckingAct = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(decrement(value));
    }
  };
};
