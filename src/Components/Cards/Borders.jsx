import React, { useState, useEffect } from "react";

const Borders = ({ borders, data }) => {

  return (
    <>
        <div className='flex items-center'>
          <p className='font-bold'>Border Countries: </p>
          <div className=''>
            {borders?.map((border) => (
                <span 
                key={border}
                className='badge badge-md text-sm'>
                  {border}
                </span>
            ))}
          </div>
        </div>
    </>
  );
};


export default Borders;
