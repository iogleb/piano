import { createSlice } from '@reduxjs/toolkit';

export interface VolumeState {
    volumeCounter: number
}

const initialState: VolumeState = {
  volumeCounter: 1,
};

export const volumeSlice = createSlice({
  name: 'volume',
  initialState,
  reducers: {
    increaseVolume(state) {
      state.volumeCounter += 1;
      if (state.volumeCounter >= 6) {
        state.volumeCounter = 1;
      }
    },
    turnVolumeDown(state) {
      state.volumeCounter -= 1;
      if (state.volumeCounter <= 0) {
        state.volumeCounter = 5;
      }
    },
  },
});

export default volumeSlice.reducer;

export const { increaseVolume, turnVolumeDown } = volumeSlice.actions;
