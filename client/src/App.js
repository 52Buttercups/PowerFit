import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/landing/Welcome';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>

        {/* todo: remove this before pr */}
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
