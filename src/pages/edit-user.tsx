import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { editUserThruProps } from "../commons/types";
import PhoneInputWithCountrySelect from "react-phone-number-input";

function EditUser(props: editUserThruProps) {
  const { user, handleUserWasUpdated } = props;
  const [editedUser, setEditedUser] = useState(user);
  const [phone, setPhone] = useState(user.phoneNumber);
  const navigate = useNavigate();

  //don't allow users to navigate to /edit-user from address bar
  useEffect(() => {
    console.log("user", user);
    if (Object.keys(user).length === 0) {
      navigate("/");
    }
  }, []);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const tmpUser = editedUser;
    tmpUser.phoneNumber = phone;
    handleUserWasUpdated(tmpUser);
    navigate("/");
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h2 id="add-user-title-text">Edit User</h2>
        <div id="form-contents-container">
          <div className="add-user-form-content">
            <label>
              First Name <span className="asterisk"> * </span>
            </label>
            <input
              className="add-user-input"
              maxLength={20}
              minLength={2}
              required
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditedUser({ ...editedUser, firstName: e.target.value });
              }}
              value={editedUser.firstName}
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
              required
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditedUser({ ...editedUser, lastName: e.target.value });
              }}
              value={editedUser.lastName}
            />
          </div>
          <div className="add-user-form-content">
            <label>
              Email <span className="asterisk"> * </span>
            </label>
            <input
              className="add-user-input"
              type={"email"}
              maxLength={20}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditedUser({ ...editedUser, email: e.target.value });
              }}
              required
              value={editedUser.email}
            />
          </div>
          <div className="add-user-form-content">
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
          <div id="add-user-button-container">
            <button id="add-user-submit-button" type="submit">
              Udpate User
            </button>
            <Link to="/" id="cancel-link">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditUser;
