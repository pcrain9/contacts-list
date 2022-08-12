import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Card from "../components/Card.tsx";
import ModalBackdrop from "../components/modal-backdrop.tsx";
import { userProps } from "../commons/types";
import DeleteScreen from "../components/delete-screen.tsx";

function Home(props: userProps) {
  const [expandedId, setExpandedId] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState({});
  const { userList, handleUserRequestedEdit, handleUserRequestedDelete } =
    props;
  function userExpandedNewCard(id: number) {
    setExpandedId(id);
  }

  function editDelReducer(type: string, user: User) {
    if (type === "EDIT") {
      handleUserRequestedEdit(user);
    }
    if (type === "DELETE") {
      setShowModal(true);
      setUserToDelete(user)
    }
  }

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <ModalBackdrop handleUserClickedModalBackground={()=>{setShowModal(false)}}>
            <DeleteScreen
              handleUserCancelledDelete={() => setShowModal(false)}
              handleUserConfirmedDelete={() => {
                setShowModal(false);
                handleUserRequestedDelete(userToDelete);
              }}
              user={userToDelete}
            />
          </ModalBackdrop>,
          document.getElementById("modal-backdrop-container")!
        )}
      <div id="home-page-container">
        <div id="add-button-container">
          <Link to="/add-user">
            <button id="add-button">+</button>
          </Link>
        </div>
        <div id="card-container">
          {userList.map((user) => {
            return (
              <Card
                key={user.id}
                editDelReducer={editDelReducer}
                user={user}
                expandedId={expandedId === -1 ? null : expandedId}
                userExpandedNewCard={userExpandedNewCard}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
