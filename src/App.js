import './App.css';
import Navbar from './components/navbar';
import Video from './components/videos';
import Resume from './components/resume';
import Footer from './components/footer';
import Home from './components/Home';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/portfolio" element={<Video/>}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </div>       
  );
}

export default App;
