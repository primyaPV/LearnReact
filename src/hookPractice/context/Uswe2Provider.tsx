import React, { useContext } from 'react'
import { UserContext } from '../context/User1Provider';

export const Uswe2Provider: React.FC = () => {
    const context = useContext(UserContext);
  
    // Check if context is defined (it should be because we're inside a provider)
    if (!context) {
      throw new Error('DisplayUserName must be used within a UserProvider');
    }
  
    return <h1>Welcome, {context.userName}!</h1>;
  };
export default Uswe2Provider;