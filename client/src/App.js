import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// theme configuration
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

// components
import Welcome from './components/welcome/Welcome';
import Dashboard from './components/dashboard/Dashboard';
<<<<<<< HEAD
import WorkoutViewer from './components/workoutView/WorkoutViewer';
=======
import WorkoutBuilder from './components/workoutBuilder/WorkoutBuilder';
>>>>>>> 8221e3592f74c1b4bddcd0d2d915547bb5ee6b42

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#323131',
    },
    primary: {
      main: '#D0DFEB',
    },
    secondary: {
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
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/viewer" component={WorkoutViewer} />
            <Route path="/builder" component={WorkoutBuilder} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
