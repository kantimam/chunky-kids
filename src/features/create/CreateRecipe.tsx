import * as React from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { RootState } from '../../app/store';
import { scrapeRecipe } from './createRecipeSlice';

export interface IAppProps {
    scrapeRecipe: (url: string) => any,
    scrapedRecipe: any
}

class CreateRecipe extends React.Component<IAppProps> {
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
        const { scrapedRecipe } = this.props;
        return (
            <Container>
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

                {scrapedRecipe &&
                    <pre>
                        {JSON.stringify(scrapedRecipe, null, 2)}
                    </pre>
                }
            </Container>
        );
    }
}



const mapStateToProps = (state: RootState) => ({
    scrapedRecipe: state.createRecipeForm.scrapedRecipe
})

const mapDispatchToProps = {
    scrapeRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe)
