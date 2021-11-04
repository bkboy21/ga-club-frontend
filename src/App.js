import { Route, Routes } from "react-router-dom";
import {useState} from 'react';
import './App.scss';

import Index from './pages/Index';
import Show from './pages/Show';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />}/>

        <Route path='/sneakers/:id' element={<Show />}/>
      </Routes>
    </div>
  );
}

export default App;
