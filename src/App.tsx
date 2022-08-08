import React from "react";
import { CandidateProvider } from "./contexts/candidates";
import "./App.css";
import Main from "./pages/main";

function App() {
  return (
    <CandidateProvider>
      <Main />;
    </CandidateProvider>
  );
}

export default App;
