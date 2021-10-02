import React from 'react';
import '../styles/App.css'

const Form = ({ setSearch, getWeather }) => {
    return (
        <div className="Form">
            <div className="row">
                <div className="col-md-3">
                    <input type="text" onChange={(event)=>{setSearch(event.target.value.toUpperCase())}} className="form-control" placeholder="City" name="city" autoComplete="off" />
                </div>
                <div className="col-md-3">
                    <button onClick={getWeather} className="btn btn-warning">Get Weather</button>
                </div>
            </div>
        </div>
    )
}

export default Form
