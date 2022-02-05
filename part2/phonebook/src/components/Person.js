const Person = ({ person, onDelete }) => {
  return (
    <div>
      {`${person.name} ${person.number}`}
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </div>
  );
};

export default Person;
