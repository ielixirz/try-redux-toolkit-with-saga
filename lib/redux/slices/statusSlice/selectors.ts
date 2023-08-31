/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectStatus = (state: ReduxState) => state.status.value;
