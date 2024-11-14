
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Profile from './pages/Profile'
function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/men" element={<Men/>} />
<Route path="/women" element={<Women/>} />
<Route path="/kids" element={<Kids/>} />
<Route path="/profile" element={<Profile/>} />
    </Routes>
    </>
  )
}

export default App