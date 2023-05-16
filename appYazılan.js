
import './App.css';
import Navbar, { Alt_navbar } from './components/navbar';
import Govde from './components/body';
import Home from './home';
import { useState } from 'react';
import Container from './components/container';
// import { Alt_navbar } from './components/navbar';
function App() {

    const [deger, setDeger] = useState(0);
    function Artı() {
        setDeger(deger + 5)
    }
    //bu 3. yöntem
    const Artı10 = () => { setDeger(deger + 10) }

    //PROPS KULLANIMI İLE İLGİLİ ALAN

    const [baslik, setBaslik] = useState("selam react öğreniyorum")
    const numara47 = 4747;






    return (
        <div className="App">
            <h1 style={{ color: "red" }}>abdullah</h1>
            <Navbar />
            <Home />
            <Alt_navbar />
            <Govde />
            <Container title={baslik} numara={numara47} />
            <button onClick={() => { setBaslik("butona tıklayınca değişti ") }}>değiştir</button>
            <br></br>
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



//ARKA PLANI KOYU YADA AÇIK YAPMA TEMA RENK DEĞİŞTİRME KODLARI

// import React, { useState } from 'react';
// import './App.css';
// import Icerik from './components/icerik';

// export const TemaVerisi = React.createContext();

// const tema = {
//   dark: {
//     color: "white",
//     backgroundColor: "black"
//   },
//   light: {
//     color: "black",
//     backgroundColor: "white"
//   }
// }

// function App() {
//   const ad = "abdullah47";

//   const [color, setColor] = useState(tema.dark);
//   function degistir() {
//     if (tema.dark === color) {
//       setColor(tema.light)
//     }
//     else {
//       setColor(tema.dark)
//     }
//   }

//   return (
//     <div className='App'>
//       <button onClick={degistir}>{tema.dark === color ? "açık" : "koyu"} </button>
//       <TemaVerisi.Provider value={color} >

//         <Icerik />

//       </TemaVerisi.Provider>

//     </div>

//   )
// }
// export default App;











// function Container(props) {
//   return (
//     <></>
//   )
// }


// function App() {
//   return(
//     <div>test</div>
//   )
// }

export default App;
