import React from "react";
import { userDeletedThruProps } from "../commons/types";
function DeleteScreen(props: userDeletedThruProps) {
  const { handleUserCancelledDelete, handleUserConfirmedDelete, user } = props;

  function handleUserCancelledReducer(type: string) {
    if (type === "CANCEL") {
      handleUserCancelledDelete();
    }
    if (type === "CONFIRM") {
      handleUserConfirmedDelete();
    }
  }

  return (
    <div id="delete-screen-container">
      <h2 id="delete-screen-text">
        Are you sure you want to delete {user.firstName} {user.lastName}?
      </h2>
      <div id="delete-button-container">
        <div
          id="delete-button-cancel"
          onClick={() => {
            handleUserCancelledReducer("CANCEL");
          }}
        >
          Cancel
        </div>
        <button
          id="delete-button-confirm"
          onClick={() => {
            handleUserCancelledReducer("CONFIRM");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteScreen;
