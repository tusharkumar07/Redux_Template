// store.js
import { configureStore } from '@reduxjs/toolkit';
import {counterReducer,counter2Reducer} from '../features/counterSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2:counter2Reducer,
  },
});

export default store;
