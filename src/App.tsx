import React, { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import UserForm from "./pages/user-form.tsx";
import "./sass/main.css";
import DATA from "./resources/dummy-data.tsx";

function App() {
  const [userList, setUserList] = useState(DATA);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  function handleNewUserWasAdded(user: User) {
    // setUser(user)
    const tmpUserArray = userList.slice();
    tmpUserArray.push(user);
    setUserList(tmpUserArray);
    // setUserList((prevUsers: User[]) => {
    //   return prevUsers.push(user);
    // });
  }
  function handleUserRequestedEdit(user: User) {
    //set user to whichever user we are going to edit here
    setUser(user);
    navigate("/edit-user");
  }
  function handleUserWasUpdated(user: User) {
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
            element={<UserForm handleNewUserWasAdded={handleNewUserWasAdded} />}
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
      <Footer />
    </>
  );
}

export default App;
