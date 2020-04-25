import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={Home} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
