import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import './App.css';


function App() {
  const [todos, setTodos] = useState([
        {id: 1,
        text: 'Compile the Spring app for deployment',
        isCompleted: false},
        {id: 2,
        text: 'Open port 8080',
        isCompleted: false},
        {id: 3,
        text: 'SSH into the VM',
        isCompleted: false}
  ])
  // const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const editTodo = (id, text) => {
    const newTodos = todos.filter(todo=>todo.id!==id);
    let item = todos.find(todo=>todo.id===id);
    item = {id: id,
    text: text,}
    setTodos([...newTodos, item])
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }
  
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const addTodo = (value) => {
    const newTodos = [...todos, { id: todos.length + 1, text: value, isCompleted: false }]
    setTodos(newTodos)
  }

console.log(todos)
    return (
      <div className="app">
        <div className="todo-list">
          <TodoForm addTodo={addTodo}/>
          <div>
            {todos.map((todo, index) => <Todo index={index} key={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>)}
          </div>
        </div>
      </div>
    );
}

export default App;
