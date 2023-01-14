import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

// let name = "Aman22";
function App() {
  const [mode, setMode] = useState("light");  //whether dark mode is enables or not
  return (
    <>
      {/* <Navbar title="TextUtiles" aboutText="About Us"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtiles" mode={mode}/>
      <div className="container my-3">
        <TextForm heading="Enter your text here"/>
        <About/>
      </div>
    </>
  );
}

export default App;
