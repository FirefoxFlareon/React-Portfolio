import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
