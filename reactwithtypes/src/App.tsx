interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartBase {
  description: string;
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CoursePartBase {
  description: string;
  backgroundMaterial: string;
  kind: "background";
}

interface CoursePartSpecial extends CoursePartBase {
  description: string;
  requirements: string[];
  kind: "special";
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

const Header = ({ name }: { name: string }) => <h1>{name}</h1>;
const Total = ({ totalExercises }: { totalExercises: number }) => <p>Number of exercises {totalExercises}</p>;

const Content = ({ coursePart }: { coursePart: CoursePart }) => (
  <div>
    <h3>
      {coursePart.name} {coursePart.exerciseCount}
    </h3>
    {coursePart.kind !== "group" && <p>{coursePart.description}</p>}
    {coursePart.kind === "group" && <p>project exercises {coursePart.groupProjectCount}</p>}
    {coursePart.kind === "special" && <p>required skills: {coursePart.requirements.join(", ")}</p>}
  </div>
);

const App = () => {
  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group",
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background",
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special",
    },
  ];
  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);
  return (
    <div>
      <Header name={courseName} />
      {courseParts.map((part, i) => (
        <Content key={part.name} coursePart={part} />
      ))}
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;
