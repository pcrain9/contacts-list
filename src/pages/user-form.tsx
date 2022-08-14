import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import { editUserThruProps } from "../commons/types";
import PhoneInput, {
  formatPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { emptyUser } from "../resources/dummy-data";

function UserForm(props: editUserThruProps) {
  const { user, handleUserWasUpdated, handleNewUserWasAdded } = props;
  const editScreen =
    window.location.pathname.search("edit-user") !== -1 ? true : false;
  const [editedUser, setEditedUser] = useState(user);
  console.log("user.phoneNumber", user.phoneNumber)
  const [phone, setPhone] = useState(editScreen ? "+1" + user.phoneNumber : "");
  const navigate = useNavigate();

  //don't allow users to navigate to /edit-user from address bar
  useEffect(() => {
    if (editScreen && user === emptyUser) {
      navigate("/");
    }
  }, [user, editScreen, navigate]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (phone && !isPossiblePhoneNumber(phone)) {
      return;
    }
    //simple data cleanup, could be handled on backend.
    const tmpUser: User = editedUser;
    //assign new user an id
    if (tmpUser.id === "") {
      tmpUser.id = Math.random();
    }
    tmpUser.firstName =
      tmpUser.firstName.charAt(0).toUpperCase() +
      tmpUser.firstName.slice(1, tmpUser.firstName.length).trim();
    tmpUser.lastName =
      tmpUser.lastName.charAt(0).toUpperCase() +
      tmpUser.lastName.slice(1, tmpUser.lastName.length).trim();
    tmpUser.email = tmpUser.email.trim();
    tmpUser.phoneNumber = formatPhoneNumber(phone);
    if (editScreen) {
      handleUserWasUpdated?.(tmpUser);
    } else {
      handleNewUserWasAdded?.(tmpUser);
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
            <PhoneInput
              initialValueFormat="national"
              defaultCountry="US"
              error={
                phone
                  ? isPossiblePhoneNumber(phone)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"
              }
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={setPhone}
            />{" "}
            {phone && !isPossiblePhoneNumber(phone) ? (
              <h4 id="form-phone-error-message">Invalid phone number</h4>
            ) : null}
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
