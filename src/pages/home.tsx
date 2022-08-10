import React from "react";
import Card from "../components/Card.tsx";

import DATA from "../resources/dummy-data";

function Home() {
  return (
    <>
      <div id="home-page-container">
        <div id="add-button-container">
          <button id="add-button">+</button>
        </div>
        <div id="card-container">
          {DATA.map((user) => {
            return <Card user={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
