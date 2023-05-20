// libraries
import React from "react";
// components
import Header from "./components/Header/Header.js";
import AddBlock from "./components/AddBlock/AddBlock.js";
import WorkPlace from "./components/WorkPlace/WorkPlace.js";
import EditBlock from "./components/EditBlock/EditBlock.js";
// styles
import "./App.css";

// const App = () => {}
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AddBlock />
        <div id="0" style={{position: 'absolute', left: '-100000px'}}></div>
        <div className="Main_Container">
          <WorkPlace />
          <div className="Zabor"></div>
          <EditBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
