import React from 'react'

function TodoItem({todo, onDelete}) {
    const deleteTodo = (e) => {
       e.preventDefault();
      onDelete(todo)
    }
    return (
        <div className='container'>
            <div className="card my-2" key={todo.sno}>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                    <a href="/" className="btn btn-danger btn-sm" onClick={deleteTodo}>Delete</a>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;