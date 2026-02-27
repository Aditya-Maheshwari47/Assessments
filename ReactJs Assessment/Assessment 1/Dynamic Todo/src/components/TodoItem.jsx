export default function TodoItem({todo, toggleTodo, deleteTodo}){
    return(
        <li className="todo-item"
            onClick={() => toggleTodo(todo.id)}
        >
        <span 
            className= { todo.completed ? "completed" : ""} 
        >
            {todo.text}
        </span>
            <button 
                className="delete-button"
                onClick={() =>deleteTodo(todo.id)}
                >
                Delete
            </button>
        </li>
    );
}