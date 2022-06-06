import { createSlice } from '@reduxjs/toolkit';

export interface PowerState {
    isSwitchedOn: boolean
}

const initialState: PowerState = {
  isSwitchedOn: false,
};

export const powerSlice = createSlice({
  name: 'power',
  initialState,
  reducers: {
    switchToggle(state) {
      state.isSwitchedOn = !state.isSwitchedOn;
    },
  },
});

export default powerSlice.reducer;

export const { switchToggle } = powerSlice.actions;
