import React, { Component } from 'react'
import { Box } from '@material-ui/core'
import RecipeSearch from './RecipeSearch'

interface Props {

}
interface State {

}

export default class SearchSection extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Box style={{
                backgroundImage: 'linear-gradient(red, blue)'
            }}
                display="flex"
                paddingTop={2}
                minHeight={300}
                alignItems="center"
                justifyContent="center"
            >
                <RecipeSearch />
            </Box>
        )
    }
}
