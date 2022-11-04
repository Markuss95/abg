import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";

const reducers = combineReducers({
  navigation: navigationReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
