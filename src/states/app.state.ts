import { CounterState } from "./counter/counter.reducer";

//Acts like store
export interface AppState {
    counter:CounterState
}