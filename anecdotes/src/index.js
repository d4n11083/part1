import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({text, points}) => (
  <>
  <p>{text} <br/> has {points} points</p>
  </>
  )

const Button = ({handleClick, text}) => (
  <>
  <button onClick={handleClick}>{text}</button>
  </>
)

const App = (props) => {
  const anecdotesLength = props.anecdotes.length
  const points = Array(anecdotesLength).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const mostVoted = Math.max(...votes)

  const getRandomNumber = () => {
    return Math.floor(Math.random() * Math.floor(anecdotesLength))
  }

  const handleClickRandom = () => (setSelected( getRandomNumber() ))
  const handleClickPoint = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes( copy )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text = {props.anecdotes[selected]} points = {votes[selected]}/>
     
      <Button handleClick = {handleClickPoint} text={"Vote"} />
      <Button handleClick = {handleClickRandom} text={"Next Anecdote"} />

      <h1>Anecdote with most votes</h1>
      <Anecdote text = {props.anecdotes[votes.indexOf(mostVoted)]} points = {mostVoted}/>

    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)