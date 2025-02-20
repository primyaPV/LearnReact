import React, {useEffect, useState } from 'react'
import { FetchedData } from '../../interfaces/FetchData'

export const LearUseEffect = () => {

//const[count,setValue]=useState(10)
const [data, setData] = useState<FetchedData | null>(null);;
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

// console.log("first val",count);
// useEffect(()=>{
// //  setValue(50)
//    console.log(`You clicked ${count} times`);
//    return ()=>{
//     console.log('Cleanup before the next effect or when component unmounts');
//    }
// },
// [count])
useEffect(() => {
    setTimeout(() => {
      try {
        const fetchedData:FetchedData  = { message: 'Hello, world!' };
        setData(fetchedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    }, 2000); 
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
        {/* <h3>{count}</h3>
        <button onClick={()=>setValue((count)=> count + 1)}>Add</button> */}
        <h1>Fetched Data:</h1>
        <p>{data?.message}</p>
    </div>
  )
}
