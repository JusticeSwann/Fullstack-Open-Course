import { useState } from 'react'
import AddNewPerson from './components/AddNewPerson'
import Phonebook from './components/Phonebook'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 10000000000}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const addNewPerson = (event) => {
    event.preventDefault()
    if (!duplicateFound()){
      const personObject = {
        name: newName, number: newNumber,
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

  const handleNewNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      
      <Search filter={filter} setFilter={setFilter}/>
      <AddNewPerson persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewName}/>
      <Phonebook persons={persons} filter={filter}/>
    </div>
  )
}

export default App