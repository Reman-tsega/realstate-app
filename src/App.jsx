import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero';
import './App.css'
import Campanies from './Components/Campanies/Campanies';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
    <div>
      <div className='white-gradient'/>
      <div >

    <Header className='header'/>
    <Hero/>
    </div>
    <Campanies/>
      </div>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
    </div>
  );
}

export default App;
