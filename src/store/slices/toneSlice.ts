import { createSlice } from '@reduxjs/toolkit';

export interface ToneState {
    typeTone: string
}

const initialState: ToneState = {
  typeTone: 'acoustic_grand_piano',
};

export const toneSlice = createSlice({
  name: 'tone',
  initialState,
  reducers: {
    activateAcoustic(state) {
      state.typeTone = 'acoustic_grand_piano';
    },
    activateElectric(state) {
      state.typeTone = 'electric_grand_piano';
    },
  },
});

export default toneSlice.reducer;

export const { activateAcoustic, activateElectric } = toneSlice.actions;
