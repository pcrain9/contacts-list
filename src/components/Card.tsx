import React, { useEffect, useState } from "react";

import {
  smallViewBtn,
  smallEditBtn,
  smallDelBtn,
  minimizeBtn,
  smUserAvatar,
  lgUserAvatar,
  phoneIcon,
  emailIcon,
} from "../resources/button-icons";
import { singleUserProps } from "../commons/types";

function Card(props: singleUserProps) {
  const [showSmallCard, setShowSmallCard] = useState(true);
  const { user, expandedId, userExpandedNewCard } = props;

  useEffect(() => {
    if (!expandedId) return;

    if (!showSmallCard && user.id !== expandedId) {
      setShowSmallCard(true);
    }
  }, [expandedId]);
  function expandCard() {
    setShowSmallCard(false);
    userExpandedNewCard(user.id);
  }
  function minimizeCard() {
    setShowSmallCard(true);
  }
  return (
    <>
      {showSmallCard ? (
        <div id="card-small">
          <div id="card-small-top-container">
            {/* <div className="card-large-other-info-container">
                <span className="card-icon-container">{emailIcon}</span>
                <h4>{user.email}</h4>
              </div> */}
            <div className="card-small-info-container">
                <span className="card-icon-container">{smUserAvatar}</span>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
            </div>
            <div className="card-small-info-container">
                <span className="card-icon-container">{phoneIcon}</span>
              <h6>
                {user.phoneNumber}
              </h6>
            </div>
          </div>
          <div className="card-button-container">
            <button id="card-small-button-view" onClick={expandCard}>
              {smallViewBtn}
            </button>
            <button id="card-small-button-edit">{smallEditBtn}</button>
            <button id="card-small-button-delete">{smallDelBtn}</button>
          </div>
        </div>
      ) : (
        <div id="card-large">
          <div id="card-large-top-container">
            <div id="card-large-back-btn-container">
              <button id="large-back-btn" onClick={minimizeCard}>
                {minimizeBtn}
              </button>
            </div>
            <div id="card-large-top-user-info-container">
              <div id="card-large-user-info-container">
                <span id="card-large-user-avatar">{lgUserAvatar}</span>
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
              </div>
              <div className="card-large-other-info-container">
                <span className="card-icon-container">{phoneIcon}</span>
                <h4>{user.phoneNumber}</h4>
              </div>
              <div className="card-large-other-info-container">
                <span className="card-icon-container">{emailIcon}</span>
                <h4>{user.email}</h4>
              </div>
            </div>
          </div>
          <div className="card-button-container">
            <button id="card-large-button-edit">{smallEditBtn}</button>
            <button id="card-large-button-delete">{smallDelBtn}</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
