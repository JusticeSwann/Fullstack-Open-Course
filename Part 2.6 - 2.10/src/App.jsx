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



  return (
    <div>
      
      <Search filter={filter} setFilter={setFilter}/>
      <AddNewPerson persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <Phonebook persons={persons} filter={filter}/>
    </div>
  )
}

export default App