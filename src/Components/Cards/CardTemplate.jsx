import React from "react";

const CardTemplate = ({ children, onClick }) => {
  return (
    <div className='' onClick={onClick}>
      <div className='card bg-base-100 shadow-xl cursor-pointer lg:h-[350px] lg:w-[280px] hover:opacity-60'>{children}</div>
    </div>
  );
};

export default CardTemplate;
