import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import darkModeReducer from '../features/theme/darkModeSlice';
import createRecipeReducer from '../features/create/createRecipeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkMode: darkModeReducer,
    createRecipeForm: createRecipeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
