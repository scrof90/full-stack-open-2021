import { kelvinToCelsius, mpsToMph, degreesToDirection } from '../units';

const Weather = ({ city, data }) => {
  const weather = {
    temp: kelvinToCelsius(data.main.temp).toFixed(0),
    iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    weatherDesc: data.weather[0].main,
    windSpeed: mpsToMph(data.wind.speed).toFixed(0),
    windDir: degreesToDirection(data.wind.deg),
  };

  return (
    <div>
      <h2>Weather in {city}</h2>
      <div>
        <strong>temperature:</strong> {weather.temp} Celcius
      </div>
      <img src={weather.iconUrl} alt={weather.weatherDesc} />
      <div>
        <strong>wind:</strong> {weather.windSpeed} mph direction{' '}
        {weather.windDir}
      </div>
    </div>
  );
};

export default Weather;
