import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import About from './components/About';
import Blog from './components/Blog'
import Home from './components/Home';
import Products from './components/Products'


function App() {
  return (
    <>
    <div className='landing'>
      < BrowserRouter>
        < Navbar />
        < Routes>
          < Route path='/' element={< Home/>} />
          < Route path='/about' element={<About />} />
          < Route path='/blog' element={<Blog />} />
          < Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
