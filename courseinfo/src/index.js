import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {


  return(
    <>
    <Part part = {props.parts[0]} />
    <Part part = {props.parts[1]} />
    <Part part = {props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  const part = props.parts
  const sum = part[0].exercises + part[1].exercises + part[2].exercises
  return(
    <>
    <p>Number of exercises {sum}</p>
    </>
  )

}

const Part = (props) => {
  const part = props.part
  return (
    <>
    <p>{part.name} {part.exercises}</p>
    </>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
