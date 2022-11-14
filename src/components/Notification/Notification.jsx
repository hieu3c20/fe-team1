import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./notification.scss";

const Notification = () => {
  return (
    <div className={"notification"}>
      <FontAwesomeIcon className={"notification-icon"} icon={faCheckCircle} />
      <div className={"notification-title"}></div>
    </div>
  );
};

export default Notification;
