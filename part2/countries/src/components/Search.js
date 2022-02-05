const Search = ({ label, query, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={query} onChange={onChange} />
    </div>
  );
};

export default Search;
