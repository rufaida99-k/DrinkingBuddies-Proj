import "./App.css";
// import React, { Component } from 'react';
import NavBar from "./NavBar.js";
import HomePage from "./HomePage.js";
import AboutPage from "./AboutPage.js";
import QuizPage from "./QuizPage.js";
import CompiledPage from "./CompiledPage.js";
import PlacesPage from "./PlacesPage.js";
import BacPage from "./BacPage.js";
import FAQPage from "./FAQPage.js";
import HelpPage from "./HelpPage.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <NavBar> </NavBar>
    

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/list" element={<CompiledPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/bac" element={<BacPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </HashRouter>
  );
}

export default App;