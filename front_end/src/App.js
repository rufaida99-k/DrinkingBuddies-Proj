import "./App.css";
import NavBar from "./NavBar.js";
import HomePage from "./HomePage.js";
import AboutPage from "./AboutPage.js";
import QuizPage from "./QuizPage.js";
import CompiledPage from "./CompiledPage.js";
import MeetPage from "./MeetPage.js";
import PlacesPage from "./PlacesPage.js";
import BacPage from "./BacPage.js";
import FAQPage from "./FAQPage.js";
import HelpPage from "./HelpPage.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/list" element={<CompiledPage />} />
        <Route path="/meet" element={<MeetPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/bac" element={<BacPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  );
}

export default App;
