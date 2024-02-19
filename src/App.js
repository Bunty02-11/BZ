import React,{useEffect} from 'react'
import Home from './Component/Mainpage/Home'

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
    <div>
      <Home/>
    </div>
  );
}

export default App
