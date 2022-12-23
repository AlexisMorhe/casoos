import {useState, createContext} from "react";

export const UserContext = createContext();

export default function UserContextProvider({children}) {
  const [userType, setUserType] = useState('');

  return (
    <UserContext.Provider value={{userType, setUserType}}>
      {children}
    </UserContext.Provider>
  )
}