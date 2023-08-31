/* Instruments */
import { counterSlice, statusSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  status: statusSlice.reducer,
};
