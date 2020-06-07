import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import MatchedPage from "./pages/MatchedPage";
import AboutPage from "./pages/AboutPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
// import FormPage from "./pages/FormPage";
import SubmitPage from "./pages/SubmitPage";

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
        <Route exact path="/submit" component={SubmitPage} />
        <Route exact path="/matched" component={MatchedPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
