import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/dashboard' render={(props) => <Dashboard {...props} />} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
