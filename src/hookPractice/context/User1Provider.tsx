import React, { createContext, useState, ReactNode } from 'react';


interface UserContextType {
  userName: string;
  setUserName:(name:string)=>void
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

// Step 3: Create a provider component with proper type for the children
interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState('Aldrin');

  return (
    <UserContext.Provider value={{ userName,setUserName}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;