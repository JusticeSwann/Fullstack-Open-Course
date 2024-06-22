import { useState, useEffect } from 'react'
import AddNewPerson from './components/AddNewPerson'
import Phonebook from './components/Phonebook'
import Search from './components/Search'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('Effect')
    phonebookService
      .getAll()
      .then(response => {
        console.log('data',response.data)
        setPersons(response.data)
      })
  },[])

  const toggleDeleteButton = (id) => {
    phonebookService
      .remove(id)
      .then(
        setPersons(persons.filter(n => n.id !== id))
      ) 
  }

  return (
    <div>
      
      <Search filter={filter} setFilter={setFilter}/>
      <AddNewPerson persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <Phonebook persons={persons} toggleButton={toggleDeleteButton} filter={filter}/>
    </div>
  )
}

export default App