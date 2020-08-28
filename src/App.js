/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

import Details from './pages/Details';
import Home from './pages/Home';
import Error from './pages/Error';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    setTheme(theme.label === 'light' ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <Header toggleTheme={toggleTheme} />
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/details/:code'>
            <Details />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
