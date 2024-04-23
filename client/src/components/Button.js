import React from "react";

const CustomButton = ({ text, defaultColor }) => {
  const handleHover = (e) => {
    e.target.style.boxShadow = `0 0 10px ${defaultColor}, 0 0 20px ${defaultColor}, 0 0 40px ${defaultColor}`;
  };

  const handleMouseOut = (e) => {
    e.target.style.boxShadow = `0 0 5px ${defaultColor}, 0 0 10px ${defaultColor}, 0 0 15px ${defaultColor}`;
  };

  const handleClick = (e) => {
    e.target.style.backgroundImage = `linear-gradient(to bottom right, ${defaultColor}, white)`;
  };

  return (
    <button
      type="button"
      className="text-white border focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                 md:text-base md:px-8 md:py-3 md:me-4 md:mb-4 lg:text-lg lg:px-10 lg:py-3 lg:me-4 lg:mb-4"
      style={{ 
        backgroundColor: defaultColor, 
        borderColor: defaultColor, 
        boxShadow: `0 0 5px ${defaultColor}, 0 0 10px ${defaultColor}, 0 0 15px ${defaultColor}`,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
     {text}
    </button>
  );
};

export default CustomButton;
