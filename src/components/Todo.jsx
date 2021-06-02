
const Todo = ({index, todo, completeTodo, deleteTodo, editTodo}) => {
    return (
        <div className={todo.isCompleted ? 'todo true' : 'todo'} key={index}>
          {todo.text}
          <div>
              <button onClick={() => completeTodo(index)}>Complete</button>
              <button onClick={() => editTodo(id, )}>Edit</button>
              <button onClick={() => deleteTodo(index)}>X</button>
          </div>
        </div>
    )
}
export default Todo;