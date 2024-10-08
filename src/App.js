import React, { useState, useEffect } from "react";
import "./App.css";
import {
  About,
  Contact,
  Footer,
  Header,
  Portfolio,
  Resume,
} from "./components";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((response) => response.json())
      .then((data) => setResumeData(data))
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
