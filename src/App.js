import './App.css';
import Navbar from './components/navbar';
import Bio from './components/bio';
import Video from './components/videos';
import Resume from './components/resume';
import Footer from './components/footer';
import Home from './components/Home';
import Contact from './components/contact';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-container'>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/bio" element={<Bio />}/>
        <Route path="/portfolio" element={<Video/>}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>
  
      <Footer />
    </div>       
  );
}

export default App;
