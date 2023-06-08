import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [activeitem, setactiveitem] = useState("Current");
  const handleclick = (item) => {
    setactiveitem(item);
  };

  return (
    <div className={`sidebar col-3  ${isOpen ? "open" : ""}`}>
      <div className="login">
        <button className="toggle-btn" onClick={toggleMenu}>
          {isOpen ? "LODOUT" : "LODGN"}
        </button>
      </div>
      {/* <p className='curr'>Current requests</p> */}
      <ul className="menu">
        <li
          className={activeitem === "Current" ? "curr" : ""}
          onClick={() => handleclick("Current")}
        >
          Current requests
        </li>
        <li
          className={activeitem === "Ongoing" ? "curr" : ""}
          onClick={() => handleclick("Ongoing")}
        >
          Ongoing stays
        </li>
        <li
          className={activeitem === "Previous" ? "curr" : ""}
          onClick={() => handleclick("Previous")}
        >
          Previous stays
        </li>
        <li
          className={activeitem === "Reports" ? "curr" : ""}
          onClick={() => handleclick("Reports")}
        >
          Reports
        </li>
      </ul>
      <div className="logout">
        <button className="btn1">Log-Out</button>
        <p>Help-Desk:</p>
        <p>786-874 9988</p>
      </div>
    </div>
  );
};

export default Sidebar;
