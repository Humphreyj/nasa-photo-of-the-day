import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './MarsWeather.css';

const Headline = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
color: white;
background: rgba(0,0,0,0,3);
padding-bottom: 2em;
`

const MarsWeather = () => {
    const API_KEY = '8d0vbyw5QuSEqhxQ2wdHQjW5LqL181bYvzVzcAJy';
    const [weather,updateWeather] =useState({
        low: 'low',
        high: 'high'
    });
    useEffect(() => {
        axios
        .get( `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`)
        .then(res => {
            console.log(res.data);
            let data = res.data;
            let target = data.sol_keys[6]
            console.log(res.data[target].AT);
             updateWeather(res.data[target].AT);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    console.log(weather);
    return (
        <Headline>
            <h4 className="mars-title">Today on Mars</h4>
            <div className="temps">
                <p className="low temp">Low: {weather.mn}&deg;F</p>
                <p className="high temp">High: {weather.mx}&deg;F</p>
            </div>
            </Headline>
    );
}

export default MarsWeather;
