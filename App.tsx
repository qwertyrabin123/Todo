
import './App.css'
import { useEffect, useState } from "react"

import Login from "@/authPage/Login";
import Todo from './tableTodo/Todo';

function App() {
  const [chenckLogin, setUserLogin] = useState(false);
  const [user, addUser] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('logindata')) {
      setUserLogin(true);
    }
  }, [])



  //make state active from userlogin.tsx
  const makeUserLogin = () => {
    setUserLogin(true);
  }

  //resgiter new User
  const userAdd = (d) => {
    addUser(prev => [...prev, d]);
  }
  return (
    <>
      {chenckLogin ? <Todo /> : <Login userlogin={makeUserLogin} addUser={userAdd} />}
    </>
  )
}

export default App
