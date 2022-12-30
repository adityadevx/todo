import React, { useState, useEffect } from 'react'
import './App.css';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
// import About from './components/About';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [progress, setProgress] = useState(0)

  let inItTodo;
  if (localStorage.getItem('todos') === null) {
    inItTodo = [];
  }
  else {
    inItTodo = JSON.parse(localStorage.getItem("todos"))
  }
  // const [todos, setTodos] = useState(inItTodo);

  const onDelete = (todo) => {
    console.log("on Delete", todo)
    setTodos(todos.filter((element) => {
      return element !== todo;
    }))
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const addTodo = (title, description) => {
    console.log(title, description)
    let sno;
    if (todos.length === 0)
      sno = 0;
    else
      sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    console.log(myTodo)
    setTodos([...todos, myTodo])

    // localStorage.setItem('todos', JSON.stringify(todos))
  }
  const [todos, setTodos] = useState(inItTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
        <Navbar title={"ToDo List"} />
        <Routes>
          <Route path='/' element={
            <>
              <AddTodo addTodo={addTodo} setProgress={setProgress} />
              <Todo todos={todos} onDelete={onDelete} />
            </>
          }
          />
         
       
        <Route path='/' element={<Footer />}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
