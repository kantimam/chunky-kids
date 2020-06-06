import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Button } from '@material-ui/core'
import { CreateRecipeForm } from '../features/create/CreateRecipeForm'

interface Props {

}
interface State {

}

export default class CreateRecipePage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Container>
                <CreateRecipeForm />
            </Container>
        )
    }
}



