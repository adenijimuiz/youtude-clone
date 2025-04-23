import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'
import { Video } from './pages/Video/Video'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </>
  )
}

export default App
