import React, { Component } from 'react'
import { Container, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/baseStyles';
import ScrapeRecipe from './ScrapeRecipe';
import StyledInput from '../../components/StyledInput';


interface Props {
    classes?: any
}
interface State {

}


class CreateRecipeForm extends Component<Props, State> {
    state = {
        name: "",
        ingredients: [],
        instructions: [],
        prepTime: 0,
        cookTime: 0,
        totalTime: 0,
        serves: 0,
        images: []
    }

    setScrapedData = (data: any) => this.setState({ ...this.state, ...data, scrapedRecipe: data })

    render() {
        const { inputMargin, containerPadding } = this.props.classes;
        console.log(this.state)
        console.log(this.props)
        return (
            <Container className={containerPadding}>
                <ScrapeRecipe
                    setScrapedData={this.setScrapedData}
                />
                <form >
                    <TextField
                        className={inputMargin}
                        variant="outlined"
                        size="small"
                        label="name"
                        placeholder="give your recipe a name"
                    />
                    <TextField
                        className={inputMargin}
                        variant="outlined"
                        size="small"
                        label="name"
                        placeholder="give your recipe a name"
                    />
                    <StyledInput
                        variant="outlined"
                        size="small"
                        label="name"
                        placeholder="give your recipe a name"
                    />
                    <img src="" alt="" />
                </form>
            </Container>

        )
    }
}



export default withStyles(styles)(CreateRecipeForm)
