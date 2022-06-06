import { combineReducers, configureStore } from '@reduxjs/toolkit';
import octaveSlice from './slices/octaveSlice';
import toneSlice from './slices/toneSlice';
import volumeSlice from './slices/volumeSlice';
import powerSlice from './slices/powerSlice';

const rootReducer = combineReducers({
  powerSlice,
  volumeSlice,
  toneSlice,
  octaveSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
