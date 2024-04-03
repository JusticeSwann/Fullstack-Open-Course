import { useState } from 'react'

const Button = ({handleStatisticClick,text}) => <button onClick={(handleStatisticClick)}>{text}</button>  //not updading buttons

const StatisticLine  = ({text,value,unit}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}{unit}</td>
    </tr>
  )
}
const Statistics = (props) => {
  return(
    <table>
      <tbody>
        <StatisticLine  text='good' value={props.good}/>
        <StatisticLine  text='neutral' value={props.neutral}/>
        <StatisticLine  text='bad' value={props.bad}/>
        <StatisticLine  text='average' value={props.average}/>
        <StatisticLine  text='positive' value={props.positive}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(0)

  const average = (good - bad)/(good+bad+neutral)
  const positive = good/(good+bad+neutral)

  const handleStatisticClick = (text) => () =>{
    if (text == 'good')
      setGood(good + 1)
    if (text === 'bad')
      setBad(bad + 1) 
    if (text === 'neutral')
      setNeutral(neutral + 1)
    if (show === false)
      setShow(true) 
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdoteClick = () =>{
    let updatedSelected = Math.floor((Math.random()*anecdotes.length))
    console.log(updatedSelected)
    setSelected(updatedSelected)
  }
  
  const handleVoteClick = () => {
    const updatedVote = [...vote]
    updatedVote[selected] = vote[selected]+1
    setVote(updatedVote)
    console.log(updatedVote)
    
  }

  const mostVotes = () => {
    const mostVotedIndex = vote.indexOf(Math.max(...vote))
    return anecdotes[mostVotedIndex]
  }

  return (

    <div>
      <h1>give feedback</h1>
      <Button handleStatisticClick={handleStatisticClick('good')} text='good' />
      <Button handleStatisticClick={handleStatisticClick('neutral')} text='neutral' />
      <Button handleStatisticClick={handleStatisticClick('bad')} text='bad' />
      <h1>StatisticLine </h1>
      {show && <div>
        <Statistics good = {good} bad = {bad} neutral={neutral} average={average} positive={positive}/>
      </div>}
      {!show && <p>no feedback given</p>}
      <h1>Annecdote of the Day</h1>
      <p>{anecdotes[selected]} has {vote[selected]} votes.</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleAnecdoteClick}>next anecdote</button>
      <h1>Annecdote with the most votes</h1>
      <p>{mostVotes()}</p>
      
    </div>
  )
}

export default App