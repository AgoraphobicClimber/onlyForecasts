import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);
    const fahrenheit_min = (data.main.temp_min * 1.8 - 459.67).toFixed(2);
    const celsius_min = (data.main.temp_min - 273.15).toFixed(2);
    const fahrenheit_max = (data.main.temp_max * 1.8 - 459.67).toFixed(2);
    const celsius_max = (data.main.temp_max - 273.15).toFixed(2);

    return (
    <div className="body">
      <section className="section">
        <div className="container">
            <h1 className="title has text-centered" style={{marginBottom: 50}}>{data.name} - {data.sys.country}</h1>
            <div className="level" style={{alignItems: 'flex-start'}}></div>
            <div className="weathercont">
             <div className="level-item has-text-centered">
                <div className="weathericon">
                    <p className="heading">{data.weather[0].description}</p>
                    <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/></p>
                </div>
             </div>
             <div className="level-item has-text-centered-2">
                <div className="temp">
                    <p className="heading">temp</p>
                    <div className="title">
                        <p className="fmax">{fahrenheit}<sup>&#8457;</sup></p>
                        <p className="fmax">{celsius}<sup>&#8451;</sup></p>
                        <p className="fmax">{data.main.temp}K</p>
                    </div>
                <div className="temp-min">
                    <div className="title">
                        <p className="heading">temp-min</p>
                        <p className="fmax">{fahrenheit_min}<sup>&#8457;</sup></p>
                        <p className="fmax">{celsius_min}<sup>&#8451;</sup></p>
                        <p className="fmax">{data.main.temp_min}K</p>
                    </div>
                </div>
                <div className="temp-max">
             <div className="title">
                        <p className="heading">temp-max</p>
                        <p className="fmax">{fahrenheit_max}<sup>&#8457;</sup></p>
                        <p className="fmax">{celsius_max}<sup>&#8451;</sup></p>
                        <p className="fmax">{data.main.temp_max}K</p>
                    </div>
            </div>
                </div>
             </div>
            <div className="weatherconttwo">
             <div className="level-item has-text-centered">
                <div>
                    <p className="heading">humidity</p>
                    <p className="humidity">{data.main.humidity}</p>
                </div>
             </div>
             <div className="level-item has-text-centered">
                <div>
                    <p className="heading">pressure</p>
                    <p className="pressure">{data.main.pressure}</p>
                </div>
             </div>
             <div className="level-item has-text-centered">
                <div>
                    <p className="heading">wind</p>
                    <p className="wind">{data.wind.speed} m/s</p>
                </div>
             </div>
            </div>
         </div>
        </div>
      </section>
  </div>
    );
}

export default Weather;