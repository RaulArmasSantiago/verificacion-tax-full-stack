import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  
  const handleLogin = () => {
    navigate("/")
  }

  return (
    <div>
      Home
      <button onClick={handleLogin}>Login</button>

      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogin}>Login</button> */}
      <button onClick={handleLogin}>Login</button>

      <button onClick={handleLogin}>Login</button>

      <span>CAMBIOS</span>
    </div>
  )
}

export default Home