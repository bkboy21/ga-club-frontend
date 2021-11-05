import { Route, Routes } from "react-router-dom";
import {useState} from 'react';
import './App.scss';

import Index from './pages/Index';
import New from './pages/New'
import Show from './pages/Show';
import Sneakers from "./pages/Sneakers";

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/new' element={<New />}/>
        <Route path='/sneakers/:id' element={<Show />}/>

        <Route path='/sneakers' element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;
