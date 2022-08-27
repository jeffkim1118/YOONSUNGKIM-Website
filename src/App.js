import './App.css';
import Navbar from './components/navbar';
import Bio from './components/intro';
import ProfilePic from './components/profilePic';
import Video from './components/videos';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <Navbar />
        <div className='content-container'>
          <ProfilePic />
          <Bio />         
        </div>
        <Video />  
        <Footer />      
      </div>
    </div>
  );
}

export default App;
