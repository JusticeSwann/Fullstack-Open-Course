import phonebookService from "../services/phonebook"

const AddNewPerson = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, notificationMessage}) => {
    
    const addNewPerson = (event) => {
        event.preventDefault()
        const personObject = {
          name: newName, number: newNumber,
        }
        if (!duplicateFound()){
          phonebookService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              const messageObject = { message:`Added ${newName}`, error: false}
              notificationMessage(messageObject)
              setNewName('')
              setNewNumber('')
              
            })
        }else{
          if (confirm(`${newName} is already added to phonebook. would you like to update their number?`)){
            const person = persons.filter(n => n.name === newName)
            const id = person[0].id
            console.log(id)
            phonebookService
              .update(id,personObject)
              .then(returnedPerson =>{
                setPersons(persons.filter(n => n.id !== id).concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
          }else{
            console.log('no')
          }
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

    return(
        <>
            <h2>Add New</h2>
            <form onSubmit={addNewPerson}>
                <div>
                    name: <input value={newName} onChange={handleNewNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNewNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default AddNewPerson 