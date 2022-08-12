import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewUserThruProps } from "../commons/types";

// const initState = { id: "", firstName: "", lastName: "", email: "", phoneNumber: "" };

function AddUser(props: addNewUserThruProps) {
  const [newUserInfo, setNewUserInfo] = useState({id: Math.random(), firstName: "", lastName: "", email: "", phoneNumber: ""});
  const navigate = useNavigate();
  const {handleNewUserWasAdded} = props;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleNewUserWasAdded(newUserInfo);
    navigate("/");
  }
  function handleUserCancelled(){
    navigate("/");
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h2 id="add-user-title-text">Add User</h2>
        <div id="form-contents-container">
          <div className="add-user-form-content">
            <label>
              First Name <span className="asterisk"> * </span>
            </label>
            <input
              className="add-user-input"
              maxLength={20}
              minLength={2}
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewUserInfo({ ...newUserInfo, firstName: e.target.value });
              }}
            />
          </div>
          <div className="add-user-form-content">
            <label>
              Last Name <span className="asterisk"> * </span>
            </label>
            <input
              className="add-user-input"
              maxLength={20}
              minLength={2}
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewUserInfo({ ...newUserInfo, lastName: e.target.value });
              }}
            />
          </div>
          <div className="add-user-form-content">
            <label>
              email <span className="asterisk"> * </span>
            </label>
            <input
              className="add-user-input"
              type={"email"}
              maxLength={20}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewUserInfo({ ...newUserInfo, email: e.target.value });
              }}
            />
          </div>
          <div className="add-user-form-content">
            <label>
              phone <span className="asterisk"> * </span>{" "}
            </label>
            <input
              className="add-user-input"
              maxLength={12}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewUserInfo({
                  ...newUserInfo,
                  phoneNumber: e.target.value,
                });
              }}
              type={"tel"}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <div id="add-user-button-container">
            <button id="add-user-cancel-button" onClick={handleUserCancelled}>Cancel</button>
            <button id="add-user-submit-button" type="submit">
              Add User
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddUser;
