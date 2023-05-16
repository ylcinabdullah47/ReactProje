import React, { useEffect, useRef, useState } from 'react'
import './App.css';
function App() {


  // useEffect iele sayaş uygulamsı yapıldı
  // const [timer, setTimer] = useState(4)
  // useEffect(() => {
  //   if (timer !== 0) {
  //     const interVal = setInterval(() => {
  //       setTimer(timer - 1)
  //     }, 1000);
  //     return () => clearInterval(interVal);
  //   }
  //   else {
  //   }
  // }, [timer])
  // // const [count, setCount] = useState(0);
  // // useEffect(() => {
  // //   console.log(count);
  // // },[])


  //BURADA USEREF örneği yapıldı

  const [renk, setRenk] = useState("red");
  const renkDegisimi = useRef(null);


  const degisim = () => {
    document.body.style.backgroundColor = renkDegisimi.current.value;
    setRenk(() => renkDegisimi.current.value);
  }




  return (
    <div className='App'>
      {/* <div style={{
        height: "250px", width: "250px", backgroundColor: "blue", borderRadius: "50%", color: "white", fontSize: "60px", margin: "1opx auto", lineHeight: "250px"
      }}>{timer} </div> */}

      <p>lütfen renklerin ingilizce ismini girin</p>
      <input type='text' ref={renkDegisimi} onChange={degisim} />
      <p> {renk} </p>
    </div>
  )
}

export default App