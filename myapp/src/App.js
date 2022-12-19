import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "Aman22";
function App() {
  return (
    <>
      {/* <Navbar title="TextUtiles" aboutText="About Us"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtiles"/>
      <div className="container my-3">
        <TextForm heading="Enter your text here"/>
      </div>
    </>
  );
}

export default App;
