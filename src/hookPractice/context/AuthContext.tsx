import React, { createContext, ReactNode, useContext, useState } from 'react'

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }

  interface AuthProviderProps {
    children: ReactNode;
  }
  const AuthContext1 = createContext<AuthContextType | undefined>(undefined);


export const AuthContext: React.FC<AuthProviderProps> = ({children}) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);


  return (
    <AuthContext1.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext1.Provider>
  )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext1);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
