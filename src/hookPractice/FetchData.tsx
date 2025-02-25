import React, { useState, useEffect } from 'react';

// Define the shape of the data you expect from the API
interface Data {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const FetchData = () => {
  const [data, setData] = useState<Data | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
        if (!response) {
          throw new Error('Network response was not ok');
        }
        const data: Data = await response.json(); 
        setData(data); 
        setLoading(false); 
      } catch (error: any) {
        setError(error.message); 
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; 

  return (
    <div>
      <h1>Fetched Data</h1>
      <p>{JSON.stringify(data)}</p> 
    </div>
  );
};

export default FetchData;
