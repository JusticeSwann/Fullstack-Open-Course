import ExerciseTotal from './ExerciseTotal'
import Part from './Part'

const Course = ({course}) => {
  return(
    <div>
      <h2>{course.name}</h2>
        {course.parts.map(part => (
              <Part key={part.id} part={part}/>
            ))}
      <ExerciseTotal parts={course.parts}/>
    </div>
  )
}

export default Course