import React from "react";

const Header = ({ money, total }) => {
  return (
    <div>
      <div className="header">
       <h3 className="h3">

      Kalan Paranız  :${total>0 ? (money-total):(money) } 
         
       </h3>
      </div>
    </div>
  );
};

export default Header;
