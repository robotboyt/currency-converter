import React from "react";
import "./Selector.css";

const Selector = ({
  handleChange,
  data,
  amount,
  amountChange,
  handleChangeSelect,
  defaultCurrent,
}) => {
  return (
    <div className="selector">
      <input
        type="number"
        value={amount}
        onChange={(e) => amountChange(e.target.value)}
      />
      <select onChange={(e) => handleChange(e)}>
        {defaultCurrent.map((item) => (
          <option
            key={item.r030.toString()}
            onClick={() => handleChangeSelect()}
          >
            {item.cc}
          </option>
        ))}
        {data.map((item) => (
          <option
            key={item.r030.toString()}
            onClick={() => handleChangeSelect()}
          >
            {item.cc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
