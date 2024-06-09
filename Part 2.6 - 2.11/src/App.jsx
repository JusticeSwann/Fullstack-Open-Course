import { useState, useEffect } from 'react'
import AddNewPerson from './components/AddNewPerson'
import Phonebook from './components/Phonebook'
import Search from './components/Search'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('data',response.data)
        setPersons(response.data)
      })
  },[])

  return (
    <div>
      
      <Search filter={filter} setFilter={setFilter}/>
      <AddNewPerson persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <Phonebook persons={persons} filter={filter}/>
    </div>
  )
}

export default App