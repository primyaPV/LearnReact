import React from 'react';
import { useAuth } from './AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <button onClick={login}>
      Log In
    </button>
  );
};

export default Login;
