import React, { useState } from 'react';
import './App.css';
import ButtonWithIncreament from './ButtonWIthIncreament';
import GetDataFromApi from './GetDataFromApi';

function App() {
  

  return (<div className="App">
    {/* <ButtonWithIncreament/> */}
    <GetDataFromApi/>
  </div>);
}

export default App;
