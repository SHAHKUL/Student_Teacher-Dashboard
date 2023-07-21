import React,{createContext} from 'react'

 let UserContext=createContext();

const UserProvider= UserContext.Provider;

export default UserContext;

export {UserProvider};