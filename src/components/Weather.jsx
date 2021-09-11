import React from 'react';
import '../styles/Weather.css';

const Weather = ({ weather }) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>{weather.name}</h1>
                <h5 className="py-4">
                    <i className={`wi ${weather.icon} display-1`}></i>
                </h5>
                <h2 className="py-2">{weather.celsius}&deg;</h2>
                {    /**show max and min temp */    }
                {minmaxTemp(weather.temp_min, weather.temp_max)}
                <h4 className="py-3">{weather.description}</h4>
            </div>
        </div>
    )
}

const minmaxTemp = (min, max) => {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}
export default Weather



