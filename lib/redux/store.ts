/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../saga/sagas";

/* Instruments */
import { reducer } from "./rootReducer";
import { middleware } from "./middleware";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware).concat(sagaMiddleware);
  },
});

// Then run the saga
sagaMiddleware.run(mySaga);

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
