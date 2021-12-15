import React, { useState } from 'react';
import getRandomInt from './get-random-int';

const Button = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};

const Anecdote = ({ text, votes }) => {
  return (
    <>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  // creates an array of the same length as anecdotes filled with zeroes
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  const [selected, setSelected] = useState(0);

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleNextAnecdoteClick = () => {
    // makes sure it always selects an anecdote different from the previous
    let randomSelection;
    do {
      randomSelection = getRandomInt(0, anecdotes.length);
    } while (randomSelection === selected);
    setSelected(randomSelection);
  };

  // finds the index of the largest element of votes
  const mostVotes = votes.indexOf([...votes].sort((a, b) => b - a)[0]);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVoteClick} name="vote" />
      <Button onClick={handleNextAnecdoteClick} name="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote text={anecdotes[mostVotes]} votes={votes[mostVotes]} />
    </div>
  );
};

export default App;
