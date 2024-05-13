import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser} = useAuthContext();
  return(
    <div className = "p-4 h-screen flex items-center justify-center">
      {/* <Signup /> */}
      <Toaster />
      <Routes>
        <Route path = "/" element = {authUser ? <Home /> : <Navigate to = "/login" />} />
        <Route path = "/login" element = {authUser ? <Navigate to = "/" /> : <Login />} />
        <Route path = "/signup" element = {authUser ? <Navigate to = "/" /> : <Signup/>}  />
  
      </Routes>
    </div>
  )
}

export default App
//hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600