import { useEffect, useState } from 'react'
import './App.css'
// import axios from 'axios';
import UseFetch from './hooks/UseFetch';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';

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

function App() {

  const [count, setCount] = useState<number>(1)


  const url:string = `https://jsonplaceholder.typicode.com/posts/`

  const {data, isLoading, error, success} = UseFetch<Data[]>(url)
  // const {data: users, isLoading: userLoading, error: userError, success: userSuccess} = UseFetch<User[]>(`https://jsonplaceholder.typicode.com/users`)
  

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
        {data.map((post: Data) => (
          <PostCard key={post.id} {...post} />
        ))}
    </div>
      )
    }
  }

return (
  <div className='app-container'>
    <Navbar />
    <div className='posts-container'>
      {display()}
      <button onClick={handleClick}>another post</button>
    </div>
  </div>
)
}

export default App
