import * as React from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { scrapeRecipe } from './createRecipeSlice';

export interface IAppProps {
    scrapeRecipe: (url: string) => any,
}

class ScrapeRecipe extends React.Component<IAppProps> {
    state = {
        recipeUrl: ""
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ [e.target.name]: e.target.value })

    submitScrapeForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (this.state.recipeUrl.length < 6) return;
        this.props.scrapeRecipe(this.state.recipeUrl)
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
