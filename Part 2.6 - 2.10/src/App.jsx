import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    if (!duplicateFound()){
      const personObject = {
        name: newName,
      }
      setPersons(persons.concat(personObject))
    }else{
      alert('${newName} is already added to phonebook')
    }
    
  }

  const duplicateFound = () => {
    const check = persons.filter((person) => person.name === newName)
    console.log('debug:', check)
    return check.length > 0
  }

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <div>debug: newName = {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons}/>
    </div>
  )
}

export default App