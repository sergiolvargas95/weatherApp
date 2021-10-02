import React from 'react';
import '../styles/Weather.css';

const Weather = ({ weather }) => {
    if(weather.name) {
        return (
            <div className="container">
                <div className="cards">
                        <>
                            <h1>{weather.name}</h1>
                            <h5 className="py-4">
                                <i className={`wi ${weather.icon} display-1`}></i>
                            </h5>
                            <h2 className="py-2">{weather.celsius}&deg;</h2>
                            {    /**show max and min temp */    }
                            {minmaxTemp(weather.temp_min, weather.temp_max)}
                            <h4 className="py-3">{weather.description}</h4>
                        </>
                </div>
            </div>
        )
    } else if (!weather.name && !weather.error) {
        return (
            <div className="container">
                <div className="cards"></div>
                    <h1>Choose a city</h1>
            </div>
        )
    } else if(weather.error){
        console.log('estoy funcionandooooooooooooo!')
        return (
            <div className="container">
                <div className="cards"></div>
                <h1>Type a correct city</h1>
            </div>
        )
    }
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


