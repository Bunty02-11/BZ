import React, { useEffect, useState, ReactDOM } from 'react'
import { gsap } from "gsap";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Mainpage/Home'
import Contactus from './Component/Contact/Contactus';
import Aboutus from './Component/About/Aboutus';
import Service from './Component/Services/Service';
import { useLocation } from 'react-router-dom';



// function preloader

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [location]);

  return isLoading ? (
    <div className="preloader">
      <span className="percent">0</span>
      <span className="loading-text text-uppercase">Loading ...</span>
      <div className="preloader-bar">
        <div className="preloader-progress" />
      </div>
      <h1 className="title v-middle">
        <span className="text-strok">BZ TECH</span>
        <span className="text-fill">BZ TECH</span>
      </h1>
    </div>
  ) : null;
}

function App() {


  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };


    loadScript("assets/js/jquery-3.1.1.min.js");
    loadScript("assets/js/plugins.min.js");
    // loadScript("assets/js/dsn-grid.min.js");
    loadScript("assets/js/custom.js");


    return () => {
      document.querySelectorAll('script').forEach(script => {
        if (script.src.includes('assets/js/')) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div >
      <HashRouter>
        <Preloader />
        <Routes>
          <Route excat path="/"  element={<Home />} />
          <Route exact path="/contact" element={<Contactus />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/service" element={<Service />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App
