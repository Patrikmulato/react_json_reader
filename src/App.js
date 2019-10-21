import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Viewer from './components/pages/Viewer';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/:id' component={Viewer} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
