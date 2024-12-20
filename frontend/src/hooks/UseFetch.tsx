// import axios from "axios";
import { useEffect, useState } from "react";

function UseFetch<Type>(url: string){

    // type Data = {
    //     userId: number;
    //     id: number;
    //     title: string;
    //     completed: boolean;
    //   }

    const [data, setData] =  useState<Type|null>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(Boolean)

    
    useEffect(() => {
      let ignore = false;
  
      const handleFetch = async ()=>{
        setIsLoading(true)
        setError(null)
        setSuccess(false)
        // setData(null)
  
        // console.log("before cleanup")
        try{
          if(ignore){
            return
          }
          const res = await fetch(url)
            if(res.ok === false){
              throw new Error("network error occured")
            }
            const json = await res.json();
            console.log("i worked")
            setData(json);
            setSuccess(true)
        }catch(e: any){
          setError(e.message)
          setSuccess(false)
        }finally{
          setIsLoading(false)
        }
      }
  
      handleFetch();
  
      return () =>{
        ignore = true;
        console.log("cleanup working!")
      }
    }, [url])

      return{ data, isLoading, error, success}
}


export default UseFetch