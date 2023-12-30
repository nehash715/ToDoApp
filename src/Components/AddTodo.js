
import React,{useState} from 'react';

const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState(" ");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
if(!title||!desc){
  alert("Title or Description cannot be blank")
}
addTodo(title,desc);
    }

    

  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Todo Title</label>
    <input type="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Todo Descriptiion</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm  btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
