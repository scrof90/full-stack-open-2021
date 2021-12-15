import React, { useState } from 'react';

const Button = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  if (stats.all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={stats.good} />
        <StatisticLine text="neutral" value={stats.neutral} />
        <StatisticLine text="bad" value={stats.bad} />
        <StatisticLine text="all" value={stats.all} />
        <StatisticLine text="average" value={stats.average} />
        <StatisticLine text="positive" value={stats.positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const stats = {
    good,
    neutral,
    bad,
    all: good + neutral + bad,
    average: ((good - bad) / 3).toFixed(1),
    positive: `${((good / (good + neutral + bad)) * 100).toFixed(1)} %`,
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} name={'good'} />
      <Button onClick={handleNeutralClick} name={'neutral'} />
      <Button onClick={handleBadClick} name={'bad'} />
      <h1>statistics</h1>
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
