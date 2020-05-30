import * as React from 'react';
import { Container } from '@material-ui/core';
import RecipeSearch from '../features/search/RecipeSearch';

export interface IAppProps {
}

export default class LandingPage extends React.Component<IAppProps> {
    public render() {
        return (
            <Container>
                <RecipeSearch />
            </Container>
        );
    }
}

