import { createReducer, on } from "@ngrx/store"
import * as CounterAction from "./counter.action"
// import * as CounterAction from 
//Create Type of State 
export interface CounterState {
    count : number
}

//Create Initial State to Type of State
export const initialCounterState : CounterState ={
    count:0
}


//Create Reducers using createReducer(initialState , [events])
export const counterReducers = createReducer(
    initialCounterState,
    on(CounterAction.increment,state=>({...state,count: state.count+1})),
    on(CounterAction.decrement,state=>({...state,count: state.count-1})),
    on(CounterAction.reset,state=>({...state,count: 0}))
)
