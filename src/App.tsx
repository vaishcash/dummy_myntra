
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Profile from './pages/Profile'
import HomeLiving from './pages/HomeLiving'
import Beauty from './pages/Beauty'


function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/men" element={<Men/>} />
<Route path="/women" element={<Women/>} />
<Route path="/kids" element={<Kids/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/home&living" element={<HomeLiving/>} />
<Route path="/beauty" element={<Beauty/>} />

    </Routes>
    </>
  )
}

export default App