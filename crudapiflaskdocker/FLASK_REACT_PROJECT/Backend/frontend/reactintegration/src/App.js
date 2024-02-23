// import  {useEffect,useState} from 'react';


// function App() {
//   const[data,setData]=useState({})
//   useEffect(()=>{
//     fetchData();
//   },[]);

//   const fetchData=async()=>{
//     try{
//       const response=await fetch('http://localhost:5000/api/data')
//       const jsonData=await response.json();
//       setData(jsonData)
//     }catch(error){
//       console.log('Error',error)
//     }
//   }
//   return (
//     <div className="App">
//       <h1>Frontend</h1>
//       <h3>{data.message}</h3>
//     </div>
//   );
// }

//export default App;

import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App(){
  const [quote,setQuote]=useState('')
  const getQuote=()=>{
    axios.get('http://localhost:5000/api/data')
    .then(response=>{
      console.log(response.data.message);
      setQuote(response.data.message);

    }).catch(err=>{
       console.log(err)
    })
  }
  return(
    <div className='App'>
      <button onClick={getQuote}>Get Quote</button>
      { quote && <p>{quote}</p> }
    </div>
  );
}
export default App;