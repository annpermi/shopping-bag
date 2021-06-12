import React, { useState } from "react";
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Bread",
      isCompleted: false
    },
    { id: 2, text: "Fruits", isCompleted: false },
    { id: 3, text: "Fish", isCompleted: false }
  ]);
  const [value, setValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const editTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const editVal = todos.find((todo) => todo.id === id);
    setEditedId(editVal.id);
    setValue(editVal.text);
    setTodos(newTodos);
    setIsEdited(true);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    setIsEdited(false);
  };

  const addTodo = (value) => {
    if (!isEdited) {
      const newTodos = [
        ...todos,
        { id: Math.floor(Math.random()*1000), text: value, isCompleted: false }
      ];
      setTodos(newTodos);
    } else {
      setTodos([...todos, { id: editedId, text: value, isCompleted: false }]);
    }
  };

  return (
    <div className="app">
      <div className="todo-list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Add"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <div>
          {todos.map((todo, index) => (
            <div
              className={todo.isCompleted ? "todo true" : "todo"}
              key={index}
            >
              {todo.text}
              <div>
              <IconButton aria-label="complete" color="primary" onClick={() => completeTodo(index)}>
                <DoneIcon fontSize="small"/>
              </IconButton>
              <IconButton aria-label="edit" color="danger" onClick={() => editTodo(todo.id)}>
                <EditIcon fontSize="small"/>
              </IconButton>
              <IconButton aria-label="delete" color="secondary" onClick={() => deleteTodo(index)}>
                <DeleteIcon fontSize="small"/>
              </IconButton>
                {/* <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => editTodo(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>X</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
