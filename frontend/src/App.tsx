import { useEffect, useState } from 'react'
import './App.css'
// import axios from 'axios';
import UseFetch from './hooks/UseFetch';

function App() {
  type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  type User = {
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
  }


  const [count, setCount] = useState<number>(1)


  const url:string = `https://jsonplaceholder.typicode.com/posts/${count}/`

  const {data, isLoading, error, success} = UseFetch<Data>(url)
  const {data: users, isLoading: userLoading, error: userError, success: userSuccess} = UseFetch<User[]>(`https://jsonplaceholder.typicode.com/users`)

  useEffect(()=>{
    console.log(data?.title)
    console.log(users?.[0].name)
    
  },[data, users])
  

  function handleClick(){
    setCount(prev => prev = Math.ceil(Math.random()*10))
    setTimeout(() => setCount(prev => prev = Math.ceil(Math.random()*10)), 0);
    setTimeout(() => setCount(prev => prev = Math.ceil(Math.random()*10)), 0);
    setTimeout(() => setCount(prev => prev = Math.ceil(Math.random()*10)), 0);
  }

  function display(){
    if(success === false && isLoading === true){
      return(
        <div>waiting for response</div>
      )
    }else if(error){
      return null
    }else if(data){
      return(
        <div>
          <h2>{data.title}</h2>
        </div>
      )
    }
  }

return (
  <div>
    {display()}

    <div>
      {/* {data ? data.name: null} */}

    </div>
    <button onClick={handleClick}>another post</button>
  </div>
)
}

export default App
