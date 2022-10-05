import './index.css'

const TodoItem = props => {
  const {eachTodoItem, onDeleteTodoItem} = props
  const {title, id} = eachTodoItem

  const onDeleteTodo = () => {
    onDeleteTodoItem(id)
  }

  return (
    <li className="item-container">
      <p className="todo-names">{title}</p>
      <button type="button" className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
