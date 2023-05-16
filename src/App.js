
import './App.css';
import Navbar, { Alt_navbar } from './components/navbar';
import Govde from './components/body';
import Home from './home';
import { useState } from 'react';
// import { Alt_navbar } from './components/navbar';
function App() {

  const [deger, setDeger] = useState(0);
  function Artı() {
    setDeger(deger + 5)
  }
  //bu 3. yöntem
  const Artı10 = () => { setDeger(deger + 10) }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>abdullah</h1>
      <Navbar />
      <Home />
      <Alt_navbar />
      <Govde />
      {deger}
      <p><button onClick={() => { setDeger(deger + 1) }}>Arttır</button></p>
      {deger}
      <p><button onClick={() => { setDeger(deger - 1) }}>Azalt</button></p>
      {/* bu yöntem ilede çalışır bu ikinci yöntem */}
      <p><button onClick={Artı}>5-5 arttır</button></p>


      <p><button onClick={Artı10}>10 arttır</button></p>


    </div>
  );
}

// function App() {
//   return(
//     <div>test</div>
//   )
// }

export default App;
