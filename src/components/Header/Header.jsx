import React from "react";
import "./header.css";
import { FaCheckSquare } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="header__text">
        <FaCheckSquare className="header__text-icon" />
        <h1 className="header__text_title">
          Todo List <span>App</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
