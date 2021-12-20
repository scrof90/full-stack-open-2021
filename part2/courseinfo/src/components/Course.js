const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = ({ course }) => {
  const numOfExercises = course.parts.reduce(
    (acc, curr) => acc + curr.exercises,
    0,
  );
  return (
    <>
      <p>
        <strong>total of exercises {numOfExercises}</strong>
      </p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;
