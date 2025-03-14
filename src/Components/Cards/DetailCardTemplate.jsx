import React from "react";

const DetailCardTemplate = ({ children }) => {
  return (
    <div>
      <div className='card lg:card-side bg-base-100 shadow-sm'>{children}</div>
    </div>
  );
};

export default DetailCardTemplate;
