import React, { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/Header";
import UserForm from "./pages/user-form";
import "./sass/main.css";
import { USERLIST, emptyUser } from "./resources/dummy-data";

function App() {
  const [userList, setUserList] = useState(USERLIST);
  const [user, setUser] = useState(emptyUser);
  const navigate = useNavigate();

  function handleNewUserWasAdded(user: User) {
    const tmpUserArray = userList.slice();
    tmpUserArray.push(user);
    setUserList(tmpUserArray);
  }
  function handleUserRequestedEdit(user: User) {
    setUser(user);
    navigate("/edit-user");
  }
  function handleUserWasUpdated(user: User) {
    console.log("wasupdated", user)
    const tmpUserArray = userList.slice();
    const key = tmpUserArray.findIndex(
      (targetUser: User) => targetUser.id === user.id
    );
    tmpUserArray.splice(key, 1, user);
    setUserList(tmpUserArray);
  }
  function handleUserRequestedDelete(user: User) {
    const tmpUserArray = userList.slice();
    const key = tmpUserArray.findIndex(
      (targetUser: User) => targetUser.id === user.id
    );
    tmpUserArray.splice(key, 1);
    setUserList(tmpUserArray);
  }
  return (
    <>
      <Header />
      <div id="content-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userList={userList}
                handleUserRequestedEdit={handleUserRequestedEdit}
                handleUserRequestedDelete={handleUserRequestedDelete}
              />
            }
          />
          <Route
            path="/add-user"
            element={
              <UserForm
                user={emptyUser}
                handleNewUserWasAdded={handleNewUserWasAdded}
              />
            }
          />
          <Route
            path="/edit-user"
            element={
              <UserForm
                user={user}
                handleUserWasUpdated={handleUserWasUpdated}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
