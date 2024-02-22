const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <>
    <Part part={props.part1} exercises={props.exercises1}/>
    <Part part={props.part2} exercises={props.exercises2}/>
    <Part part={props.part3} exercises={props.exercises3}/>
    </>
  )
}

const Total = (props) => {
  return(
    <p>{props.total}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
console.log(course.name)

  return (
    <div>
      <Header course={course.name}/>
      
      <Content  part1={course.parts[0].name} 
                part2={course.parts[1].name} 
                part3={course.parts[2].name}/>
      
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      
    </div>
  )
}

export default App