import * as React from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { scrapeRecipe, setScrapedData } from './createRecipeSlice';
import { apiScrapeRecipe } from '../../api/Recipe';

/* most likely dead code since im handeling scraping without redux in the createRecipeForm component now */

export interface IAppProps {
    scrapeRecipe: (url: string) => any,
    setScrapedData(data: any): void
}

class ScrapeRecipe extends React.Component<IAppProps> {
    state = {
        recipeUrl: "",
        error: null
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ [e.target.name]: e.target.value })

    submitScrapeForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (this.state.recipeUrl.length < 6) return;

        try {
            const data = await apiScrapeRecipe(this.state.recipeUrl);
            const json = await data.json();
            setScrapedData(json);
        }
        catch (e) {
            console.log(e);
            return this.setState({ error: "failed to import recipe" });
        }
    }

    public render() {
        return (
            <form
                onSubmit={this.submitScrapeForm}
            >
                <TextField
                    name="recipeUrl"
                    variant="outlined"
                    value={this.state.recipeUrl}
                    onChange={this.onChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                >
                    import
                </Button>
            </form>
        );
    }
}





const mapDispatchToProps = {
    scrapeRecipe
}

export default connect(null, mapDispatchToProps)(ScrapeRecipe)
