import C from '../constants';

export const initialState = (data) =>
  (
    {
      type: C.INITIAL_STATE,
      payload: data,
    }
  );