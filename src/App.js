import './App.css';
import Navbar from './components/navbar';
import Bio from './components/bio';
import ProfilePic from './components/profilePic';
import Video from './components/videos';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='background'>
        {/* <Container /> */}
        <Navbar />
        <div className='content-container'>
          <ProfilePic />
          {/* <Bio />
          <Video />
          <Footer /> */}
        </div>        
      </div>
    </div>
  );
}

export default App;
