import { CHANGE_FRUIT } from "../actions/action";

const stateInit = {
  chooseFruit: "watermelon",
  user: "koko",
};

export const myReducer = (state = stateInit, action) => {
  switch (action.type) {
    case CHANGE_FRUIT:
      return { ...state, chooseFruit: action.fruit };
    default:
      return state;
  }
};
