import Country from './Country';

const Countries = ({ countries, onShowClick }) => {
  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (countries.length <= 10) {
    return countries.map((c) => (
      <div key={c.name.common}>
        {c.name.common}
        <button onClick={() => onShowClick(c)}>show</button>
      </div>
    ));
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default Countries;
