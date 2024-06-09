const Phonebook = ({persons,filter}) => {

  const personsToShow = persons.filter(person => person.name.includes(filter))

  return(
    <>
      <h2>Phonebook</h2>
      {personsToShow.map(person => 
      <li key={person.name} style={{listStyleType: 'none'}}>
        {person.name} : {person.number}
        </li>)} 
    </>
  )
}

export default Phonebook