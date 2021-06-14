
import './App.css';
import { useEffect, useState } from 'react';
import Lists from './component/Lists/Lists';
import Layout from './component/Layout/Layout';
import Form from './component/Form/Form';


function App() {
  const [error, setError]=useState(null)
  const [todo, setTodo]=useState('');
  const [todos, setTodos]=useState([]);

  // Savings todos
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

// Get todos from localStorage
useEffect(() => {
const getTodos = JSON.parse(localStorage.getItem('todos'))

if(getTodos){
  setTodos(getTodos)
}
},[])



const submitHandler = (e) =>{
  e.preventDefault();

if(todo.length < 3){
  setError('At least 3 Character required')
  return false
}

  setTodos([{id:Date.now(),done:false, title: todo}, ...todos])
  console.log(todos);
  setError(null)
  setTodo('')
}

  const doneHandler = (todoId) =>{
    const index = todos.findIndex((item) => item.id === todoId)
    const duplicateTodos = [...todos]

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }
    setTodos(duplicateTodos)

    console.log(todos);
  }

  const delHandler = (todoId) =>{
    const updateTodos = todos.filter(item => item.id !== todoId )
    setTodos(updateTodos)
  }



  return (
    <div className="App">
      <Layout>
      <h1 className="f-bold">Todo List</h1>
      <Form todo={todo}  change={(e)=>setTodo(e.target.value)} submit={submitHandler} error={error}/>

    <Lists done={doneHandler} del={delHandler} todos={todos}/>

    </Layout>
    </div>
    
  );
}

export default App;
