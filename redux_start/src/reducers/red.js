const stateInit = {
  chooseFruit: "watermelon",
  user: "koko",
};

export const myReducer = (state = stateInit, action) => {
  if (action.type === "changeFruit") {
    return { ...state, chooseFruit: "mango" };
  }
  return state;
};
