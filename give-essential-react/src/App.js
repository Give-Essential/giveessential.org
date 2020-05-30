import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <NavigationBar />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;