import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
