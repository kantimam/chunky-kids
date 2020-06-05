import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../app/store';
import { Container, TextField } from '@material-ui/core';


interface Props {

}
interface State {

}

export class CreateRecipeForm extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Container>
                <form >
                    <TextField />
                </form>
            </Container>
        )
    }
}

const mapStateToProps = (state: RootState) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeForm)
