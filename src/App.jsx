import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div>Hello!</div>
      <Outlet />
    </>
  )
}

export default App
