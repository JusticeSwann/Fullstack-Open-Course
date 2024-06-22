import axios from "axios"
import phonebookService from "../services/phonebook"



const Phonebook = ({persons,setPersons,filter}) => {

  const personsToShow = persons.filter(person => person.name.includes(filter))
  
  const baseUrl = 'http://localhost:3001/persons'

  const toggleButton = (id) => {
    phonebookService
      .remove(id)
      .then(
        setPersons(persons.filter(n => n.id !== id))
      )
    
  }

  return(
    <>
      <h2>Phonebook</h2>
      {personsToShow.map(person => 
      <li key={person.name} style={{listStyleType: 'none'}}>
        {person.name} : {person.number }&ensp;<button onClick={()=>{toggleButton(person.id)}}>Delete</button>
        </li>)} 
    </>
  )
}

export default Phonebook