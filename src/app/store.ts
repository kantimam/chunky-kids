import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import darkModeReducer from '../features/theme/darkModeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkMode: darkModeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
