import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/auth" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
