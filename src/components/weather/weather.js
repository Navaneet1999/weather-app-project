import React from "react";

import "./weather.css";

export default function Current({ weatherInfo, location, date }) {
  return (
    <div className="weather_box">
    <div className="Weather">
      <div className="Weather__info">
        <img
          className="Weather__icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.current.weather[0].main}
        />
        <ul className="Weather__list">
          <li className="list__temperature">
            {Math.round(weatherInfo.current.temp)}
            <sup className="list__temperature-symbol">°C</sup>
          </li>
          <li> {weatherInfo.current.weather[0].description} </li>
          <li>
            {" "}
            Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h{" "}
          </li>
        </ul>
      </div>
      <div className="Weather__other-info">
        <h2 className="other-info__city">
          {location.city || location.town},{" "}
          {location.state || location.country.toUpperCase()}
        </h2>
        <h3 className="other-info__clouds">{date}</h3>
        {/* <h3 className="other-info__clouds">
          
          Humidity: {weatherInfo.current.humidity}%
        </h3> */}
        
        
      </div>
      
      </div>
      <div className="weather_prs">
        <div className="weather_left">
        <h3>
        Pressure: {weatherInfo.current.pressure} hpa
        </h3>
        </div>
        <div className="weather_right">
        <h3>
        Humidity: {weatherInfo.current.humidity}%
        </h3>
        </div>
      </div>
    </div>
  );
}