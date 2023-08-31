/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */

const initialState: StatusSliceState = {
  value: false,
  status: "idle",
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

/* Types */
export interface StatusSliceState {
  value: boolean;
  status: "idle" | "loading" | "failed";
}
