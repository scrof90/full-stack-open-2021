import Person from './Person';

const Persons = ({ persons, nameFilter, onDelete }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(nameFilter.trim().toLowerCase()),
        )
        .map((person) => (
          <Person
            key={person.id}
            person={person}
            onDelete={() => onDelete(person.id)}
          />
        ))}
    </div>
  );
};

export default Persons;
