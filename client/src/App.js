// libraries
import React from "react";
// components
import Auth from "./pages/Auth.js";
import Main from "./pages/Main.js";
import Projects from "./pages/Projects.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// styles
import "./App.css";

// const App = () => {}
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Auth/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
      </Router>
      
  );
}

export default App;
