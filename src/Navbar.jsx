import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#333",
        padding: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/Notifications"
        style={{ color: "#fff", marginRight: "auto", textDecoration: "none" }}
      >
        Notifications
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{ color: "#fff", marginRight: "10px", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link to="/Support" style={{ color: "#fff", textDecoration: "none" }}>
          Support
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
