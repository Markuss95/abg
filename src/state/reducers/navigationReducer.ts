const initialState = 0;

type Action = {
  type: string;
  amount?: number;
};

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case "clicked":
      return state + 1;
    case "unclicked":
      return state - 1;
    default:
      return state + 1;
  }
};

export default reducer;
