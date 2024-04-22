import React from "react";

const CustomButton = ({ text, defaultColor }) => {
  const handleHover = (e) => {
    e.target.style.backgroundImage = `linear-gradient(to bottom right, ${defaultColor}, white)`;
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundImage = "none";
  };

  const handleClick = (e) => {
    e.target.style.boxShadow = `0 0 10px ${defaultColor}, 0 0 40px ${defaultColor}, 0 0 80px ${defaultColor}`;
  };

  return (
    <button
      type="button"
      className="text-white border hover:text-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      style={{ backgroundColor: defaultColor, borderColor: defaultColor }}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
     {text}
    </button>
  );
};

export default CustomButton;
