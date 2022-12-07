import './App.css';

let name = "Aman22";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem ipsa vero? Dolores commodi alias, aspernatur cumque libero exercitationem est iste facilis maiores sit ut eaque dolorum iusto dolorem voluptatum ducimus rerum mollitia placeat!
        </p>
      </div>
      <div className="blank">Beautiful</div>
    </nav>
    </>
  );
}

export default App;
