import React from "react";
import Navbar from "./Navbar";

const Header = ({ handleSearch, handlePage }) => {
  return (
    <div className="nav" style={{ marginBottom: "1rem" }}>
      <Navbar handleSearch={handleSearch} handlePage={handlePage} />
    </div>
  );
};

export default Header;
