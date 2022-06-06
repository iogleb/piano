import { createSlice } from '@reduxjs/toolkit';

export interface OctaveState {
    octaveNumber: number
}

const initialState: OctaveState = {
  octaveNumber: 1,
};

export const octaveSlice = createSlice({
  name: 'power',
  initialState,
  reducers: {
    increaseOctave(state) {
      state.octaveNumber += 1;
      if (state.octaveNumber >= 8) {
        state.octaveNumber = 1;
      }
    },
    reduceOctave(state) {
      state.octaveNumber -= 1;
      if (state.octaveNumber <= 0) {
        state.octaveNumber = 7;
      }
    },
  },
});

export default octaveSlice.reducer;

export const { increaseOctave, reduceOctave } = octaveSlice.actions;
