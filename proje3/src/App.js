import './App.css';
import React from 'react';
import Hakkimizda from './components/Hakkimizda';
import Urunler from './components/Urunler';
import Iletisim from './components/Iletisim';
import logo from './images/reacatlogotest.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">


      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className='logo' src={logo} alt='' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to='/'>AnaSayfa</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/Hakkimizda'>Hakkımızda</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Urunler'>Ürünler</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Iletisim'>İletişim</Link>
                </li>


              </ul>

            </div>
          </div>
        </nav>

        <div className='container mt-3'>
          <div className='row'>
            {/* <div className='col-md-12'>
              <div className="alert alert-primary" role="alert">
                AnaSayfa hoşgeldiniz
              </div>
            </div> */}
            <Switch>

              <Route path="/"></Route>
              <Route path="/Hakkimizda"><Hakkimizda /> </Route>
              <Route path="/Urunler"><Urunler /> </Route>
              <Route path="/Iletisim"><Iletisim /> </Route>

            </Switch>
            <div className='col-md-12'>
              <div className="alert alert-warning" role="alert">
                ID: AnaSayfa
              </div>
            </div>
          </div>
        </div>




      </div>





    </div>
  );
}

export default App;
