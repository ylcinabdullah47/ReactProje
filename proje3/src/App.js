import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
function tıkla() {
  <BrowserRouter>

    <Route><Home /></Route>

  </BrowserRouter>

}

function App() {
  return (
    <div>
      <view>
        <text>ssak</text>
      </view>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignUp' element={<SignUp />} />

        </Routes>

      </BrowserRouter> */}
      <button onClick={tıkla}>tıkla</button>
      {/* <Home /> */}
      tetst
    </div>
  )
}

export default App