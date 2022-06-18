import React from "react";
import "./Header.css";

const Header = ({ data, formatNumber }) => {
  let usd = [];
  usd = data.filter((item) => item.cc === "USD");

  let eur = [];
  eur = data.filter((item) => item.cc === "EUR");

  return (
    <div className="header">
      <div className="logo-container">
        <span className="logo">Currency Converter</span>
      </div>
      <div className="major-currencies">
        {usd.map((item) => (
          <span key={item.r030.toString()}>
            {item.cc}: {formatNumber(item.rate)}
          </span>
        ))}
        {eur.map((item) => (
          <span key={item.r030.toString()}>
            {item.cc}: {formatNumber(item.rate)}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Header;
