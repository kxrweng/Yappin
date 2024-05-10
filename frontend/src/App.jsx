import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
function App() {
  return(
    <div className = "p-4 h-screen flex items-center justify-center">
      {/* <Signup /> */}
      <Home/>
    </div>
  )
}

export default App
//hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600