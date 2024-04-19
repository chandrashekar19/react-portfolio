import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

const App = (props) =>  {

    const [resumeData, setResumeData] = useState({});

  useEffect(() => {
        fetch('/resumeData.json')
        .then(response => response.json())
        .then(data => setResumeData(data))
        .catch(error => {
            console.log(error);
            alert(error);
        });
    }, []);

    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    );
  }

export default App;
