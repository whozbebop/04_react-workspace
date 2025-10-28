import React, { useState } from 'react'

function Todos() {

  const [todos, setTodos] = useState([
    {no: 1, description: 'React 공부하기', isDone: false},
    {no: 2, description: '운동하기', isDone: true},
  ]);
  const [newTodo, setNewTodo] = useState({
    no: 3,
    description: '',
    isDone: false,
  });

  const handleTodoAdd = (e) => {
    if (!newTodo.description.trim()){
      alert('할일을 입력해주세요');
      return;
    }
    setTodos(todos.concat(newTodo));
    setNewTodo({
      no: newTodo.no + 1,
      description: '',
      isDone: false,
    });
  };
  const handleTodoDelete = (e) => {
    console.log(e.target.dataset.todoNo);
    setTodos(todos.filter((todo) => Number(e.target.dataset.todoNo) !== todo.no));
  };
  const handleTodoStateChange = (e) => {
    setTodos(todos.map((todo) => {
      if(Number(e.target.dataset.todoNo) === todo.no)
        return {...todo, isDone: e.target.checked};
      return todo;
    }));
  };

  return (
    <>
      <div>
        <input type="text" placeholder="새 할일" onChange={(e) => setNewTodo({...newTodo, description: e.target.value})} value={newTodo.description} />
        <button type="buton" onClick={handleTodoAdd}>추가</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input 
              type="checkbox" 
              checked={todo.isDone} 
              data-todo-no={todo.no} 
              onChange={handleTodoStateChange} />
            <label 
              style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}
            >{todo.description}</label>
            <button 
              type="button" 
              data-todo-no={todo.no} 
              onClick={handleTodoDelete}>삭제</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todos