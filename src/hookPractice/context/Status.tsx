import React from 'react';
import { useAuth } from './AuthContext';

const Status: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? <p>You are logged in!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Status;
