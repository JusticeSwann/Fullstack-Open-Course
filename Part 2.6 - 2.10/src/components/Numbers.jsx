const Numbers = ({persons}) => {
  return(
    <>
      {persons.map(person => <li key={person.name} style={{listStyleType: 'none'}}>{person.name}</li>)} 
    </>
  )
}

export default Numbers