import React from 'react'

function TodoItem({ todo, onDelete, mode }) {
    const deleteTodo = (e) => {
        e.preventDefault();
        onDelete(todo)
    }


    return (
        // <div className='container' id={mode === 'dark' ? 'animateBorder' : ''} style={{ backgroundColor: mode === 'dark' ? '#272730' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
        <div className="card my-2" key={todo.sno}
            style={{ backgroundColor: mode === 'dark' ? '#272730' : 'white', color: mode === 'dark' ? 'white' : 'black' }}  >
            <div className="card-body" style={{
                backgroundColor: mode === 'dark' ? '#272730' : 'white', color: mode === 'dark' ? 'white' : 'black', border: mode === 'dark' ? '1px solid white' : "none",
                borderRadius: mode === 'dark' ? '10px' : 'none'
            }}
            >
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.description}</p>
                <a href="#" className="btn btn-danger btn-sm" onClick={deleteTodo}>Delete</a>
            </div>
        </div>
    )
}

export default TodoItem;