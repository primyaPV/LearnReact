import React,{useState} from 'react'

export const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
    
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in</h1>
      )}

      
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  )
}
