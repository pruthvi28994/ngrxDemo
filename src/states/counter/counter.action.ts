import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment')
export const decrement = createAction('[Counter Component] decrement')
export const reset = createAction('[Counter Component] reset')