import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchIdentityCount } from "../redux/slices/counterSlice/fetchIdentityCount";
import { PayloadAction } from "@reduxjs/toolkit";
import { counterSlice } from "../redux/slices/counterSlice";

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchCount(action: PayloadAction<number>) {
  try {
    const { data } = yield call(fetchIdentityCount, action.payload);
    yield put(counterSlice.actions.INCREMENT_BY_AMOUNT(data));
  } catch (e: any) {
    yield put({ type: "COUNT_FETCH_FAILED", message: e.message });
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* mySaga() {
  yield takeLatest("COUNT_FETCH_REQUESTED", fetchCount);
}
