import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { apiScrapeRecipe } from '../../api/Recipe';

interface RecipeFormState {
    scrapeQuery: string,
    scrapedRecipe: any,
    error: any
}

const initialState: RecipeFormState = {
    scrapeQuery: '',
    scrapedRecipe: { hello: "world" },
    error: {}
};

export const formSlice = createSlice({
    name: 'recipeForm',
    initialState,
    reducers: {
        setScrapedData: (state, action: PayloadAction<any>) => {
            state.scrapedRecipe = action.payload
            state.error = {}
        },
        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload
        },
        resetError: (state) => {
            state.error = initialState.error
        }
    },
});

export const { setScrapedData, setError } = formSlice.actions;

export const scrapeRecipe = (url: string): AppThunk => dispatch => {
    apiScrapeRecipe(url)
        .then(res => res.json())
        .then(json => dispatch(setScrapedData({ ...json, query: url })))
        .catch(e => {
            console.dir(e.message);
            console.dir(e.stack);
            dispatch(setError(e.message))
        })
}



export default formSlice.reducer;
