import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const driversSlice = createSlice({
  name: 'drivers',
  initialState: {
    pagination: {
      size: 0,
      skip: 0,
      current: 1,
    },
  },
  reducers: {
    setSize: (state, action: PayloadAction<number>) => {
      state.pagination.size = action.payload;
      return state;
    },
    setSkip: (state, action: PayloadAction<number>) => {
      state.pagination.skip = action.payload;
      return state;
    },
    setCurrent: (state, action: PayloadAction<number>) => {
      state.pagination.current = action.payload;
      return state;
    },
    reset: state => {
      state.pagination.size = 0;
      state.pagination.skip = 0;
      state.pagination.current = 1;
      return state;
    },
  },
});

export const {setSize, setSkip, setCurrent, reset} = driversSlice.actions;
export const {reducer, reducerPath} = driversSlice;

export default driversSlice;
