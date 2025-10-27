import React, { useState } from 'react'

function Todos() {

  const [todo, setTodo] = useState({
    checkbox: false,
    content: '',
    button: '삭제'
  })

  const [add, setAdd] = useState([])

  const handleTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name] : e.target.value
    })
  }

  const handleAddTodo = () => {
    setAdd([...add, todo]);
    console.log(add)
  }

  const handleRemoveTodo = (index) => {
    setAdd(add.filter(() => ))
  }

  return (
    <>
      <input type="text" name="content" onChange={handleTodo} />
      <button onClick={handleAddTodo}>추가</button>
      <br />
      <ul>
        {add.map((item, index) => (
          <li key={index}>
          <input type="checkbox" checked={item.checkbox} />
          {item.content}
          <button type="button" onClick={handleRemoveTodo(index)}>{item.button}</button>
          </li>
        ))}
      </ul>
    </>
  )
}1

export default Todos