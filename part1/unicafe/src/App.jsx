import { useState } from 'react'

const Button = ({handleClick,text}) => <button onClick={(handleClick)}>{text}</button>  //not updading buttons
const StatisticLine  = ({text,value,unit}) => <p>{text}: {value}{unit}</p>
const Statistics = (props) => {
  return(
    <div>
      <StatisticLine  text='good' value={props.good}/>
      <StatisticLine  text='neutral' value={neutral}/>
      <StatisticLine  text='bad' value={bad}/>
      <StatisticLine  text='average' value={average} unit='%'/>
      <StatisticLine  text='positive' value={positive} unit='%'/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [show, setShow] = useState(false)

  const average = (good - bad)/(good+bad+neutral)
  const positive = good/(good+bad+neutral)

  const handleClick = (text) => () =>{
    if (text == 'good')
      setGood(good + 1)
    if (text === 'neutral')
      setBad(bad + 1) 
    if (text === 'bad')
      setNeutral(neutral + 1)
    if (show === false)
      setShow(true) 
  }

  const statistics = [good, neutral, bad, average, positive]
  

  return (

    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClick('good')} text='good' /> {console.log(good)}
      <Button handleClick={handleClick('neutral')} text='neutral' />
      <Button handleClick={handleClick('bad')} text='bad' />
      <h1>StatisticLine </h1>
      {show && <div>
        <StatisticLine  text='good' value={good}/>
        <StatisticLine  text='neutral' value={neutral}/>
        <StatisticLine  text='bad' value={bad}/>
        <StatisticLine  text='average' value={average} unit='%'/>
        <StatisticLine  text='positive' value={positive} unit='%'/>
      </div>}
      {!show && <p>no feedback given</p>}
    </div>
  )
}

export default App