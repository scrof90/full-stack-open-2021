import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleCreate = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
      setNotification({
        message: `Added ${returnedPerson.name}`,
        isSuccess: true,
      });
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    });
  };

  const handleUpdate = (id) => {
    const person = persons.find((p) => p.id === id);

    const isConfirmed = window.confirm(
      `${person.name} is already in the phonebook, replace the old number with a new one?`,
    );
    if (isConfirmed) {
      const changedPerson = { ...person, number: newNumber };

      personService
        .update(id, changedPerson)
        .then((returnedPerson) => {
          setPersons(persons.map((p) => (p.id !== id ? p : returnedPerson)));
          setNewName('');
          setNewNumber('');
          setNotification({
            message: `Updated ${returnedPerson.name}'s number`,
            isSuccess: true,
          });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch((error) => {
          setPersons(persons.filter((p) => p.id !== id));
          setNotification({
            message: `Information of ${person.name} has already been removed from server`,
            isSuccess: false,
          });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          console.log(error.response.data);
        });
    }
  };

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);

    const isConfirmed = window.confirm(`Delete ${person.name}?`);
    if (isConfirmed) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter((p) => p.id !== id)));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = persons.find((p) => p.name === newName);
    if (person) {
      handleUpdate(person.id);
    } else {
      handleCreate();
    }
  };

  const handleNameFilterChange = (e) => setNameFilter(e.target.value);
  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Search
        label={'filter shown as'}
        value={nameFilter}
        onChange={handleNameFilterChange}
      />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        nameFilter={nameFilter}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
