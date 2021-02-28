import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./Footer";
function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetchAdive();
  }, []);

  const fetchAdive = () => {
    setAdvice("Loading Advice");
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip.advice);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className='app'>
      <div className='app-section'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          {advice ? (
            <button className='button' onClick={fetchAdive}>
              <span>Request a new Advice</span>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
