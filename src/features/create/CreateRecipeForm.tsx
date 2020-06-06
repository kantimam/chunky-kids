import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../app/store';
import { Container, TextField, Button } from '@material-ui/core';
import ScrapeRecipe from './ScrapeRecipe';


interface Props {

}
interface State {

}

export class CreateRecipeForm extends Component<Props, State> {
    state = {}

    setScrapedData = (data: any) => this.setState({ ...this.state, ...data, scrapedRecipe: data })

    render() {
        console.log(this.state)
        return (
            <>
                <ScrapeRecipe
                    setScrapedData={this.setScrapedData}
                />
                <form >
                    <TextField />
                    <img src="" alt="" />
                </form>
            </>

        )
    }
}

const mapStateToProps = (state: RootState) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeForm)
