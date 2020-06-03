import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Archivo', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
