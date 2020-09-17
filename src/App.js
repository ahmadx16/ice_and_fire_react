import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { ThemeProvider } from './contexts/themeContext';
import { ICE } from './themes/colorThemes'


function App() {

  const [theme, setTheme] = useState(ICE)

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  }
  
  return (
    <ThemeProvider value={{ theme: theme, updateTheme: updateTheme }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/dashboard' render={(props) => <Dashboard {...props} />} ></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
