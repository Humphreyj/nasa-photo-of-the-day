import React, { useState,useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import MarsWeather from './components/MarsWeather/MarsWeather';

function App() {

  const API_KEY = '8d0vbyw5QuSEqhxQ2wdHQjW5LqL181bYvzVzcAJy';
  const [state,changeState] = useState({})
  useEffect(() => {
   
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      changeState(res.data);
      
    })
    .catch(err => {
      console.log(err);
    })
  },[])

 

  
  
  return (
    <div className="App">
      <Header  />
      <MarsWeather />
      <Content 
      date={state.date}
      title={state.title}
      media_type={state.media_type}
      explanation={state.explanation}
      url={state.url} />
    </div>
  );
}

export default App;
