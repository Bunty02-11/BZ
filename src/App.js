import React, { useEffect, ReactDOM } from 'react'
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Mainpage/Home'
import Contactus from './Component/Contact/Contactus';
import Aboutus from './Component/About/Aboutus';
import Service from './Component/Services/Service';


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
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Home />} />
          <Route path="/contact"
            element={<Contactus />} />
          <Route path="/about"
            element={<Aboutus />} />
          <Route path="/service"
            element={<Service />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
