import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MatchedPage from "./pages/MatchedPage";

const GlobalStyle = createGlobalStyle`
 html, body {
    font-family: 'Archivo', sans-serif;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/matched" component={MatchedPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
