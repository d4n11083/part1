import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TitleDisplay = ({text}) => (
  <>
  <h1>{text}</h1>
  </>
  )

const Statistic = ({name, value}) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
  )
  
const Button = ({handleClick, text}) => (
  <>
  <button onClick={handleClick}>{text}</button>
  </>
)

const Statistics = (props) => {
  const {good, neutral, bad} = props

  const calcTotal = ( ) => ( good + neutral + bad )
  
  const calcAverage = ( ) => {
    if( good===0 && bad===0 ){
      return 0
    }
    return (
      (Math.abs(good - bad) / calcTotal())
    )
  }

  const calcPositive = ( ) => {
    if( good===0 ){
      return 0
    }
    return (
      ( (good / calcTotal()) * 100 )
    )
  }

  if( calcTotal() === 0 ){
    return <p> No feedback given </p>
  }
  return(
    <>
    <TitleDisplay text = {"statistics"}/>
    <table>
      <tbody>
        <Statistic name={"good"} value={good}/>
        <Statistic name={"neutral"} value={neutral}/>
        <Statistic name={"bad"} value={bad}/>
        <Statistic name={"all"} value={calcTotal()}/>
        <Statistic name={"average"} value={calcAverage()}/>
        <Statistic name={"positive"} value={ calcPositive() + "%" }/>
      </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => ( setGood(good + 1))
  const handleClickNeutral = () => ( setNeutral(neutral + 1))
  const handleClickBad = () => ( setBad(bad + 1))
  
  return (
    <div>

      <TitleDisplay text = {"give feedback"}/>

      <Button handleClick={handleClickGood} text={"good"} />
      <Button handleClick={handleClickNeutral} text={"neutral"} />
      <Button handleClick={handleClickBad} text={"bad"} />

      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)