import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import About from './components/About';
import Blog from './components/Blog'
import Home from './components/Home';
import Products from './components/Products'
import Checkout from './components/Checkout';


function App() {
  return (
    <>
    <div className=''>
      < BrowserRouter>
        < Navbar />
        < Routes>
          < Route path='/' element={< Home/>} />
          < Route path='/about' element={<About />} />
          < Route path='/blog' element={<Blog />} />
          < Route path='/products' element={<Products />} />
          < Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
