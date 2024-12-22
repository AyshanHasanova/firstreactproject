import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Design from './components/Design'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import DvD from './components/DvD'
import Model from './components/Model'
import Review from './components/Review'
import Footer from './components/Footer'
import Karusel from './components/Karusel'
import AOS from "aos"
import "../node_modules/aos/dist/aos.css"
import { useEffect } from 'react'
import Fruqently from './components/Fruqently'



function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
    <Header/>
    <Hero/>
    <Design/>
    <Project/>
    <DvD/>
    <Model/>
    <Karusel/>
     <Review/>
     <Fruqently/>
    <Footer/>
    </>
  )
}

export default App
