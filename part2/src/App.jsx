import Course from "./components/Course"
import Redux from "./components/Redux"

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return(
    <div>
      <h1>{course.name}</h1>
        {course.parts.map(part => (
              <Course key={part.id} part={part}/>
            ))}
      <Redux parts={course.parts}/>
    </div>
  )

}

export default App