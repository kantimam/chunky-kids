import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface darkModeState {
    isDark: boolean;
}

const initialState: darkModeState = {
    isDark: false,
};

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: state => {
            state.isDark = !state.isDark;
            setLocalStorageTheme(state.isDark)
        },
        getInitialMode: (state, action: PayloadAction<boolean>) => {
            state.isDark = action.payload
        }
    },
});

export const { toggleDarkMode, getInitialMode } = darkModeSlice.actions;

export const toggleDark = (): AppThunk => dispatch => {

    dispatch(toggleDarkMode())
}

export const getInitial = (): AppThunk => dispatch => {
    const mode = true;
    dispatch(getInitialMode(mode))
}

const setLocalStorageTheme = (dark: boolean) => {
    localStorage.setItem('chunky_kids_theme', JSON.stringify({ darkMode: dark }));
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDark = (state: RootState) => state.darkMode.isDark;

export default darkModeSlice.reducer;
