import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Search from './components/Search';
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newFilteredCountries = countries.filter((c) =>
      c.name.common.includes(query),
    );

    setFilteredCountries(newFilteredCountries);
  }, [countries, query]);

  const onShowClick = (country) => setQuery(country.name.common);

  const handleSearchChange = (e) => setQuery(e.target.value);

  return (
    <div>
      <Search
        label={'find countries'}
        query={query}
        onChange={handleSearchChange}
      />
      {countries && (
        <Countries countries={filteredCountries} onShowClick={onShowClick} />
      )}
    </div>
  );
};

export default App;
