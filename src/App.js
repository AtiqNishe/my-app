

import { useEffect, useState } from 'react';
import './App.css';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
     <Counter></Counter>

      <h1>I am react</h1>
      <Users></Users>
      </header>
  
    </div>
  );
}

function Users(){
  const userStyle=[
    {border:'2px solid white', borderRadius:'8px', backgroundColor:'gold',
    height:'500px', width:'350px', margin:'10px'}
  
  ]
  const price2=[{price:12}, {name: 'Kacghamoric'} ]
  const [users, setUsers]= useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data => setUsers(data))
    


  },[])
  return(
    <div >
      <h1>Dainmaik : {users.length}</h1>
      
        
   
      {
        users.map(user=>{
      return(<div style={userStyle[0]}>
                
                <h1>{user.name}</h1>
                <h2>{user.title}</h2>
                <h3>{user.id}</h3>
                <a href={user.email}>Click</a>
                <h3>{user.userName}</h3>
                
                <Friend2 k={user}></Friend2>
          </div>)
        })
          
        
      }

   

    </div>
  )
}

function Counter(){
  const [count, setCount]=useState(0)
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
      <button onClick={()=>setCount(count * 2)}>Dobule</button>
      <button onClick={()=>setCount(count % 2)}>Divition</button>
      <Counter2 n={count}></Counter2>
      <Counter3 m={count}></Counter3>
      <Counter4 o={count}></Counter4>
      <Counter5 p={count}></Counter5>
    </div>
  )
}

function Counter2(props){
  const count = props.n;
  return(
    <div>
      <h1>Count2: {count}</h1>
      
    </div>
  )
}

function Counter3(props){
  const count = props.m;
  return(
    <div>
      <h1>Count3:{count}</h1>
      
    </div>
  )
}

function Counter4(props){
  const count = props.o;
  return(
    <div>
      <h1>Count4:{count}</h1>
      
    </div>
  )
}
function Counter5(props){
  const count = props.p;
  return(
    <div>
      <h1>Count5:{count}</h1>
      
    </div>
  )
}

function Friend2(props){
  const frindStyle=[
    {border:'2px solid white', borderRadius:'8px', backgroundColor:'green',
    height:'200px', width:'200px', margin:'10px'}
  
  ]
  const {name, id, email, userName} = props.k;
  return(
    <div style={frindStyle[0]}>
      <h6>{name}</h6>
      <h6>{id}</h6>
      <h6>{email}</h6>
      <h5>{userName}</h5>
      
      
      
    </div>
  )
}

export default App;
