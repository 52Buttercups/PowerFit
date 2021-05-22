import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
