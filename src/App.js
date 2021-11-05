import { Route, Routes } from "react-router-dom";
import {useState} from 'react';
import './App.scss';

import Index from './pages/Index';
import New from './pages/New'
import Show from './pages/Show';
import Sneakers from "./pages/Sneakers";

import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/new' element={<New />}/>
        <Route path='/sneakers/:id' element={<Show />}/>
        <Route path='/sneakers' element={<Sneakers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
