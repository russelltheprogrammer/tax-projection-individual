import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quarter: 1,
};

export const quarterSlice = createSlice({
  name: 'quarter',
  initialState,
  reducers: {
    increment: (state) => {
      state.quarter += 1
    },
    decrement: (state) => {
      state.quarter -= 1
    },
    incrementByAmount: (state, action) => {
      state.quarter += action.payload
    },
  },
});


export const { increment, decrement, incrementByAmount } = quarterSlice.actions;

export default quarterSlice.reducer;