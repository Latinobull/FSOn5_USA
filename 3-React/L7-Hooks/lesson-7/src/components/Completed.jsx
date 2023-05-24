import { useState, useEffect } from 'react';
import moment from 'moment';
export default function Completed() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '348a03864c53988b715b0daea933a0ef';

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return;

      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const lat = data[0].lat;
        const lon = data[0].lon;
        const response2 = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
        );
        if (!response2.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data2 = await response2.json();
        console.log(data2);
        setWeatherData(data2);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleInputChange = event => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter a city"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed}mph</p>
          <p>
            Sunrise: {moment.unix(weatherData.sys.sunrise).format('HH:mm:ss')}
          </p>
          <p>
            Sunset: {moment.unix(weatherData.sys.sunset).format('HH:mm:ss')}
          </p>
        </div>
      ) : null}
    </div>
  );
}
