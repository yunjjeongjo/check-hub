import React from "react";
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router></Router>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
