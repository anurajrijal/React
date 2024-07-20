import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'


import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>React with me </h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
