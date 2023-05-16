
import React, { useState } from 'react';
import './App.css';
import Icerik from './components/icerik';

export const TemaVerisi = React.createContext();

const tema = {
  dark: {
    color: "white",
    backgroundColor: "black"
  },
  light: {
    color: "black",
    backgroundColor: "white"
  }
}

function App() {
  const ad = "abdullah47";

  const [color, setColor] = useState(tema.dark);
  function degistir() {
    if (tema.dark === color) {
      setColor(tema.light)
    }
    else {
      setColor(tema.dark)
    }
  }

  return (
    <div className='App'>
      <button onClick={degistir}>{tema.dark === color ? "açık" : "koyu"} </button>
      <TemaVerisi.Provider value={color} >

        <Icerik />

      </TemaVerisi.Provider>

    </div>

  )
}
export default App;
