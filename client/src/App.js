import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// theme configuration
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

// components
import Welcome from './components/welcome/Welcome';
import Dashboard from './components/dashboard/Dashboard';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#323131',
    },
    primary: {
      main: '#FF681E',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Switch>
            <Route path="/welcome" component={Welcome} />
          </Switch>
        </div>
        {/* todo: delete this before pr */}
        <Dashboard />
      </ThemeProvider>
    </Router>
  );
}

export default App;
