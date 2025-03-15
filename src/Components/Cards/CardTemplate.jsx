import React from "react";

const CardTemplate = ({ children, onClick }) => {
  return (
    <div className='' onClick={onClick}>
      <div className='card bg-base-100 drop-shadow-xl cursor-pointer h-[350px] w-[280px] hover:opacity-60'>{children}</div>
    </div>
  );
};

export default CardTemplate;
