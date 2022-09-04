import './App.css';
import Navbar from './components/navbar';
import Bio from './components/bio';
import Video from './components/videos';
import Resume from './components/resume';
import Footer from './components/footer';
import Home from './components/Home';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-container'>
        <Home />
        <Bio />
        <Video />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>       
  );
}

export default App;
