import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) =>  <h3>{course}</h3>

const Part = (props) => {
  return (
    <p key={props.part.key}> 
      {props.part.name} {props.part.exercises}
    </p> 
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((item,index) => <Part part={item} key={index} /> )}
    </> 
  )
} 
const Total = (props) => {
  const total = props.parts.reduce( (suma, item) => suma + item.exercises ,0)
  return (
    <p>Number of exercises {total}</p>
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
