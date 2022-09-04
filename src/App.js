import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from "./components/Contact";
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/> 
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        

      </Routes>
  <Footer/>
    </div>
  );
}

export default App;
