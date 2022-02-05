import { useState, useEffect } from 'react';
import Weather from './Weather';
import axios from 'axios';

const Country = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}`,
      )
      .then((res) => setWeather(res.data));
  }, [api_key, country.capital]);

  return (
    <div>
      <h1>
        <span>{country.flag}</span>
        {country.name.official}
        <span>{country.flag}</span>
      </h1>
      <div>capital {country.capital[0]}</div>
      <div>population {country.population}</div>
      <h2>Spoken languages</h2>
      <ul>
        {Object.keys(country.languages).map((lang) => (
          <li key={lang}>{country.languages[lang]}</li>
        ))}
      </ul>
      {weather && <Weather city={country.capital[0]} data={weather} />}
    </div>
  );
};

export default Country;
