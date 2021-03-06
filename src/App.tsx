import React from 'react';
import { connect } from 'react-redux';
import {
  ThemeProvider,
} from '@material-ui/core/styles';
import './App.css';
import Nav from './features/navigation/Nav';
import { theme, darkTheme } from './features/theme/themes';
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { RootState } from './app/store';
import LandingPage from './pages/LandingPage'
import CreateRecipePage from './pages/CreateRecipePage'
import { Switch, Route } from 'react-router-dom'

interface Props {
  isDark: boolean
}

function App({ isDark }: Props) {
  /* useSelector hook might be more sexy but triggers 2 rerenders every time :/ */

  const muiTheme = createMuiTheme(isDark ? darkTheme : theme)

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="App">
        <Nav isDark={isDark} />
        <main>
          <Switch>

            <Route path="/create">
              <CreateRecipePage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: RootState) => {
  return { isDark: state.darkMode.isDark }
}

export default connect(mapStateToProps)(App);
