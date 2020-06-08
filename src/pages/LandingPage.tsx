import * as React from 'react';
import { Container } from '@material-ui/core';
import SearchSection from '../features/search/SearchSection';

export interface IAppProps {
}

export default class LandingPage extends React.Component<IAppProps> {
    public render() {
        return (
            <>
                <SearchSection />

                <Container>
                </Container>
            </>

        );
    }
}

