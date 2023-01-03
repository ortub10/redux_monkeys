export const CHANGE_FRUIT = "CHANGE_FRUIT";

export const changeFruit = (_fruit) => {
  return { type: CHANGE_FRUIT, fruit: _fruit };
};
