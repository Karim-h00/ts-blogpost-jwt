import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter, 
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
// import axios from 'axios';
import Home from './app/Home';
import SignIn from './app/SignIn';
import Navbar from './components/Navbar';

function App() {

  type User = {
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
  }


return (
 <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sign-in" element={<SignIn />}/>
  </Routes>
 </BrowserRouter> 
)
}

export default App