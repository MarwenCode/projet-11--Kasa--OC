import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./dropdown.scss";

const Dropdown = ({ title, children }) => {

  const [isOpen , setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)

  }



  return (
    <div className="dropdown">
      <div className="title"  onClick={toggle}>
        <p>{title}</p>
        <span>
          {isOpen ? (
            <FaChevronUp className="dropdown-icon" />
          ) : (
            <FaChevronDown className="dropdown-icon" />
          )}
        </span>
      </div>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default Dropdown;
