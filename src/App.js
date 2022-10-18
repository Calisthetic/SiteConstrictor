// libraries
import React from 'react';
// components
import Header from './components/Header/Header.js';
import AddBlock from './components/AddBlock/AddBlock.jsx';
import WorkPlace from './components/WorkPlace/WorkPlace.jsx';
import EditBlock from './components/EditBlock/EditBlock.jsx';
// styles
import './App.css';

// const App = () => {}
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Main_Container'>
        <WorkPlace />
        <EditBlock />
      </div>
    </div>
  );
}

export default App;
