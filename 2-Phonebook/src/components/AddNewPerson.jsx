import phonebookService from "../services/phonebook"

const AddNewPerson = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
    
    const addNewPerson = (event) => {
        event.preventDefault()
        if (!duplicateFound()){
          const personObject = {
            name: newName, number: newNumber,
          }
          phonebookService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName=''
              setNewNumber=''
            })
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