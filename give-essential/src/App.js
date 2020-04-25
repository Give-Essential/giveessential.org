import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FAQ from './components/FAQ';

import './App.css';

function App() {
  return (
    <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/faq" component={FAQ} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
