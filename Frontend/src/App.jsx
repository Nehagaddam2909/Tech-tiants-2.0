import { Routes, Route } from 'react-router-dom'
import Login from './Components/Teacher/Auth/Login'
import Signup from './Components/Teacher/Auth/Signup'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Helllllllllllllo</h1>} />




        {/* Teacher routes */}
        <Route path="/Teacher/login" element={<Login />} />
        <Route path="/Teacher/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
