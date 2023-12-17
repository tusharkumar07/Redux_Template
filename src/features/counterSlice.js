// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const counterSlice2=createSlice({
    name:"counter2",
    initialState:{
        value:5,
    },
    reducers:{
        multiply:(state)=>{
                state.value*=2;
        },
        square:(state)=>{
                state.value*=state.value;
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const { multiply, square } = counterSlice2.actions;
export const selectData = (state) => state.counter2.value;
// Export named reducer
export const counterReducer = counterSlice.reducer;
export const counter2Reducer = counterSlice2.reducer;
