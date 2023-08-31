"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
  selectStatus,
  statusSlice,
} from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const status = useSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
        <div>Status: {status ? "ONLINE" : "OFFLINE"}</div>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch({
              type: "COUNT_FETCH_REQUESTED",
              payload: incrementAmount,
            })
          }
        >
          Add Saga Latest
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(statusSlice.actions.toggle())}
        >
          Toggle Status
        </button>
      </div>
    </div>
  );
};
