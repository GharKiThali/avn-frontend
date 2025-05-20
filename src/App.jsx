import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import MouseFollower from './Components/Mousefollower'
import Footer from './Components/Footer'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ForgotForm from './pages/ForgotForm';

const App = () => {
  return (
    <>
      <Header/>
      <MouseFollower/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/forgot-password" element={<ForgotForm/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
