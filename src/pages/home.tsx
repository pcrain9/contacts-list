import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.tsx";

import { userProps } from "../commons/types";

function Home(props: userProps) {
  const [expandedId, setExpandedId] = useState(-1);
  const { userList, user } = props;
  console.log("home", typeof userList)
  function userExpandedNewCard(id: number) {
    setExpandedId(id);
  }

  return (
    <>
      <div id="home-page-container">
        <div id="add-button-container">
          <Link to="/add-user"><button id="add-button">+</button></Link>
        </div>
        <div id="card-container">
          {userList.map((user) => {
            return (
              <Card
                key={user.id}
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
