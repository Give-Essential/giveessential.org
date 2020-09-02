import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import MatchedPage from "./pages/MatchedPage";
import AboutPage from "./pages/AboutPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import DonorFormPage from "./pages/DonorFormPage";
import EWFormPage from "./pages/EWFormPage";
import EWSubmitPage from "./pages/EWSubmitPage";
import EWMatchedPage from "./pages/EWMatchedPage";
import AgreementPage from "./pages/AgreementPage";
import ChoicePage from "./pages/ChoicePage";
import SubmitPage from "./pages/SubmitPage";

const GlobalStyle = createGlobalStyle`
 html, body {
    font-family: 'Archivo', sans-serif;
    background-color: '#F4F4F4';
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
        <Route exact path="/donor-form" component={DonorFormPage} />
        <Route exact path="/essential-worker-form" component={EWFormPage} />
        <Route exact path="/essential-worker-submit" component={EWSubmitPage} />
        <Route exact path="/essential-worker-matched" component={EWMatchedPage} />
        <Route exact path="/essential-worker-choice" component={ChoicePage} />
        <Route exact path="/essential-worker-agreement" component={AgreementPage} />        
      </BrowserRouter>
    </>
  );
}

export default App;
