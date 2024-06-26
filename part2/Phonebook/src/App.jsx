import { useState, useEffect } from 'react'
import AddNewPerson from './components/AddNewPerson'
import Phonebook from './components/Phonebook'
import Search from './components/Search'
import Notification from './components/Notification'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState({})


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
      .catch(error => {
        if (error.response.status === 404){
          const person = persons.filter(n => n.id === id)
          console.log(person)
          const messageObject = {message: `Information of ${person[0].name} has already been removed from server`, error: true}
          notificationMessage(messageObject)
        }
      }) 
  }

  const notificationMessage = (message) => {
    setMessage(message)
    setTimeout(()=>{
    setMessage({message: null,
                error: null})
    },5000)
  }




  return (
    <div>
      <Notification message={message}/>
      <Search filter={filter} setFilter={setFilter}/>
      <AddNewPerson persons={persons} 
                    setPersons={setPersons} 
                    newName={newName} 
                    setNewName={setNewName} 
                    newNumber={newNumber} 
                    setNewNumber={setNewNumber}
                    notificationMessage={notificationMessage}
                    />
      <Phonebook persons={persons} toggleButton={toggleDeleteButton} filter={filter}/>
    </div>
  )
}

export default App