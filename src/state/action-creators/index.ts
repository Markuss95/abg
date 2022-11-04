import { Dispatch } from "redux";

export const increaseCount = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "clicked",
      amount: amount,
    });
  };
};

export const decreseCount = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "unclicked",
    });
  };
};
