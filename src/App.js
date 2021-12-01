import React, { Component } from 'react';
// eslint-disable-next-line 
import { Navbar, Container, Nav } from 'react-bootstrap';
// eslint-disable-next-line 
import { Route, Routes } from 'react-router-dom'; 
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component { 
   constructor(props){
       super(props);
       this.state = {
       
       }
 }

render() { 
  return ( 

      <div className="App">
            
           <header>
           <HeaderComponent />
          </header>

          <main>
          
          <Routes>
          </Routes>

          </main>

          
          <FooterComponent/>
      </div>
    )
  }

}



export default App
