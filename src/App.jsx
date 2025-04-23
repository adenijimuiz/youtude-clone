import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'
import { Video } from './pages/Video/Video'
import { useState } from 'react'

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </>
  )
}

export default App
