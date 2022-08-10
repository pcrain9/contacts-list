import React from "react";

function Card(props) {
  const { user } = props;
  console.log(user);
  return (
    <>
      <div id="card-small">
        <div id="card-small-top-container">
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <h6>{user.email}</h6>
        </div>
        <div id="card-small-bottom-container">
          <button id="card-small-button-view">view</button>
          <button id="card-small-button-edit">edit</button>
          <button id="card-small-button-delete">delete</button>
        </div>
      </div>
    </>
  );
}

export default Card;
