
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';

import React,{useState} from 'react';
import AddTodo from './Components/AddTodo';

function App() {
  let initTodo;
  if(localStorage.setItem("todos")===null)
  {
    initTodo=[];
  }
  else{
   initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  
  
  const onDelete=(todo)=>{
    console.log("i am delete",todo);
    //let index=todos.indexOf(todo);
    //todos.splice(index,1); 
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
    
    
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this todo ",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
     let sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    if(localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
 }
  const [todos,setTodos]=useState([
  
    
  ]);
  return (
    <>
    <Header title ="Todo List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos= {todos} onDelete={onDelete}/>
    

    </>
  );
}

export default App;
