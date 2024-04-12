import React from "react";
import { Outlet } from "react-router-dom";

const Notifications = () => {
  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <h1>Notifications</h1>
      <p>
        In case the counts at the exit and entrance don't match up at the end of
        the day.
      </p>

      <Outlet />
    </div>
  );
};

export default Notifications;
