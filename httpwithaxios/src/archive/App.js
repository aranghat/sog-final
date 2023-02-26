import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [task, setTask] = useState({title : ""});
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    axios.post('http://localhost:3000/todos', task)
         .then((response) => {
            setTodoList([...todoList, response.data]);
        })
        .catch((error) => {
            console.log(error);
      });
  }

  const handleMarkAsComplete = (id) => {
      let task = todoList.find((todo) => todo.id == id);
      task.iscompleted = true;
      axios.put("http://localhost:3000/todos/" + id, task)
            .then((response) => {

            })
            .catch((error) => {
                console.log(error);});
  }

  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/todos/" + id)
         .then((response) => {
            setTodoList(todoList.filter((todo) => todo.id != id));
        })
        .catch((error) => {
            console.log(error);
      });
  }

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
         .then((response) => {
            setTodoList([...response.data]);
        })
        .catch((error) => {
            console.log(error);
      });
  },[]);

  return (
    <div className="container">
      <h1>To Do Item</h1>
      <input type="text" onChange={(event)=> setTask({...task,title: event.target.value})} placeholder="Enter Task" id="task" />
      <button type='button' onClick={handleAddTodo}>Add</button>
      <ul className='list-group'>
        {
          todoList.map((todo) => {
            return <li className='list-group-item' key={todo.id}>{todo.title} 
            {todo.iscompleted ? <span className='text text-success ms-5'>Completed</span> 
            : (<button type='button' onClick={() => handleMarkAsComplete(todo.id)}>Mark as Complete</button>)}
           
            <button type='button'
            onClick={() => handleDelete(todo.id)}
            className='btn btn-danger ms-5'>Delete</button>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
