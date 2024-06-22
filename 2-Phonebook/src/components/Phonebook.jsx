const Phonebook = ({persons,toggleButton,filter}) => {

  const personsToShow = persons.filter(person => person.name.includes(filter))

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