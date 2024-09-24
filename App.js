import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist ,settotlist]=useState([])
  
  let saveTodoList =(event)=>{
   
    let toname=event.target.toname.value;
       if(!todolist.includes(toname)){
        let finaltodolist =[...todolist, toname]
        settotlist(finaltodolist)
       }
       else{
        // alert("already")
       }
    event.preventDefault();
  }
  let list =todolist.map((value ,index)=> {

    return(
    <Todolistitems value={value} key={index} indexNumber={index}
     todolist={todolist} settotlist={settotlist}/>
    
    
    )
  })
  return (
    <div className="App">
     <h1>TODO List </h1>
     <form onSubmit={saveTodoList}>
      <input type='text' name='toname'/><button>save</button>
     </form>
     <div className='outerdiv'>
     <ul>
       {list}
     </ul>
     </div>
    </div>
  );
}

export default App;
function Todolistitems({value , indexNumber,todolist, settotlist}){
 let[ status, setstatus]=useState(false)
  let deleteRow=()=>{
   let finalData =todolist.filter ((v,i)=>i!=indexNumber)
   settotlist(finalData)
   
   }
   let checkstatus=()=>{
    setstatus(!status)
  }
  return(
    <li className={(status)? 'completetodo': ""} onClick={checkstatus}>{indexNumber+1} {value}<span onClick={deleteRow}>&times;</span></li>
  )
}