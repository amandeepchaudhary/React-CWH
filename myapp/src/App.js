import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

// let name = "Aman22";
function App() {
  const [mode, setMode] = useState("light");  //whether dark mode is enables or not
  const [dma, setDma] = useState("white")

  const dm = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      setDma("black");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      setDma("white");
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtiles" aboutText="About Us"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtiles" mode={mode} enable={dm}/>
      <div className="container my-3">
        <TextForm heading="Enter your text here"/>
        <About enable={dm} col={dma}/>
      </div>
    </>
  );
}

export default App;
