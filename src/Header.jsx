import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/");
  };

  return (
    <header
      style={{ background: "#333", padding: "10px", textAlign: "center" }}
    >
      <Link
        to="/"
        style={{ color: "#fff", textDecoration: "none", cursor: "pointer" }}
      >
        <h1 onClick={handleHeaderClick}>COUNT UI</h1>
      </Link>
    </header>
  );
};

export default Header;
