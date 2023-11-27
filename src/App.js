import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Back from './components/Back';
import Business from './components/Business';
import Card_1 from './components/Card_1';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero_1 from './components/Hero_1';
import Hero_3 from './components/Hero_3';
import Img from './components/Img';
import Logo from './components/Logo';


function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Hero_1/>
      <Hero/>
      <Hero_3/>
      <Card_1/>
      <Img/>
      <Business/>
      <Logo/>
      <Back/>
      <Footer/>

    </BrowserRouter>
   
    
  )
}

export default App;
