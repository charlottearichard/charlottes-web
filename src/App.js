import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from "./components/Contact";
import Footer from './components/Footer'
// HashRouter helps github pages render page
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        

      </Routes>
  <Footer/>
    </Router>
  );
}

export default App;
