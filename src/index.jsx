import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";

import './styles/App.css';

// Get the root element
const rootElement = document.getElementById("root");

// Create a root and render the component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
