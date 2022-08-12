import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Header from "./components/Header.tsx";
import AddUser from "./pages/add-user.tsx";
import "./sass/main.css";
import DATA from "./resources/dummy-data.tsx";

function App() {
  const[userList, setUserList] = useState(DATA);
  // const[user, setUser] = useState({})

  function handleNewUserWasAdded(user:User){
    // setUser(user)
    const tmp = userList.slice();
    tmp.push(user)
    setUserList(tmp)
    // setUserList((prevUsers: User[]) => { 
    //   return prevUsers.push(user);
    // });
  }
  function handleUserWasEdited(user:User){
    // write function to find value in array and update setUserList()
  }
  return (
    <>
      <Header />
      <div id="content-container">
        <Routes>
          <Route path="/" element={<Home userList={userList} />} />
          <Route path="/add-user" element={<AddUser handleNewUserWasAdded={handleNewUserWasAdded}/>} />
        {/*   <Route path="/edit-user" element={<EditUser user/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
