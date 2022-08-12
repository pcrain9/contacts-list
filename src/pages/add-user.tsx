import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import { addNewUserThruProps } from "../commons/types";
import PhoneInputWithCountrySelect from "react-phone-number-input";

// const initState = { id: "", firstName: "", lastName: "", email: "", phoneNumber: "" };

function AddUser(props: addNewUserThruProps) {
  const [newUserInfo, setNewUserInfo] = useState({
    id: Math.random(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { handleNewUserWasAdded } = props;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const tmpUser = newUserInfo
    tmpUser.phoneNumber = phone;
    handleNewUserWasAdded(tmpUser);
    navigate("/");
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h2 id="add-user-title-text">Add A New User</h2>
        <div id="form-contents-container">
          <div className="add-user-form-content">
            <label>
              First Name <span className="asterisk"> * </span>
            </label>
            <input
              className="add-user-input"
              maxLength={20}
              minLength={2}
              onInvalid="this.setCustomValidity('foooooooo')"
              required
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
              required
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewUserInfo({ ...newUserInfo, lastName: e.target.value });
              }}
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
                setNewUserInfo({ ...newUserInfo, email: e.target.value });
              }}
              required
            />
          </div>
          <div className="add-user-form-content">
            {" "}
            <label>
              Phone <span className="asterisk"> * </span>{" "}
            </label>
            <PhoneInputWithCountrySelect
              defaultCountry="US"
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={setPhone}
            />
          </div>
          <div id="add-user-button-container">
            <button id="add-user-submit-button" type="submit">
              Add User
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

export default AddUser;
