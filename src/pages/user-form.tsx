import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import { editUserThruProps } from "../commons/types";
import PhoneInputWithCountrySelect from "react-phone-number-input";

const INITUSER = {
  id: Math.random(),
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

function UserForm(props: editUserThruProps) {
  const { user, handleUserWasUpdated, handleNewUserWasAdded } = props;
  const editScreen = user ? true : false;
  const [editedUser, setEditedUser] = useState(editScreen ? user : INITUSER);
  const [phone, setPhone] = useState(editScreen ? user.phoneNumber : "");
  const navigate = useNavigate();

  //don't allow users to navigate to /edit-user from address bar
  useEffect(() => {
    console.log("rerendered");
    if (user && Object.keys(user).length === 0) {
      navigate("/");
    }
  }, [user, navigate]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const tmpUser = editedUser;
    tmpUser.phoneNumber = phone;
    if (editScreen) {
      handleUserWasUpdated(tmpUser);
    } else {
      handleNewUserWasAdded(tmpUser);
    }
    navigate("/");
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h2 id="form-user-title-text">
          {editScreen ? "Edit User" : "Add a New User"}
        </h2>
        <div id="form-contents-container">
          <div className="form-user-content">
            <label>
              First Name <span className="asterisk"> * </span>
            </label>
            <input
              className="form-user-input"
              maxLength={14}
              minLength={2}
              required
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditedUser({ ...editedUser, firstName: e.target.value });
              }}
              value={editedUser.firstName}
            />
          </div>
          <div className="form-user-content">
            <label>
              Last Name <span className="asterisk"> * </span>
            </label>
            <input
              className="form-user-input"
              maxLength={14}
              minLength={2}
              required
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditedUser({ ...editedUser, lastName: e.target.value });
              }}
              value={editedUser.lastName}
            />
          </div>
          <div className="form-user-content">
            <label>
              Email <span className="asterisk"> * </span>
            </label>
            <input
              className="form-user-input"
              type={"email"}
              maxLength={20}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditedUser({ ...editedUser, email: e.target.value });
              }}
              required
              value={editedUser.email}
            />
          </div>
          <div className="form-user-content">
            <label>
              Phone <span className="asterisk"> * </span>{" "}
            </label>
            <PhoneInputWithCountrySelect
              defaultCountry="US"
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={setPhone}
            />{" "}
          </div>
        </div>
        <div id="form-user-button-container">
          <button id="form-user-submit-button" type="submit">
            {editScreen ? "Update User" : "Add User"}
          </button>
          <Link to="/" id="cancel-link">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}

export default UserForm;
