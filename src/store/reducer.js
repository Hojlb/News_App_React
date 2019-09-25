import C from '../constants';

export const newsData = (state=[], action) => {
  switch (action.type) {
    case C.INITIAL_STATE:
      console.log("reducer", action.payload);
      return action.payload;

    default: return state;
  }
};