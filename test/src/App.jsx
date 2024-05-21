import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  const handleClick = () => console.log("Clicked")
  
  console.log('rendering....', counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default App