import React, { useEffect, useState } from "react";
import DetailCardTemplate from "./DetailCardTemplate";

const DetailCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("src/data/data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className=''>
      {data.map((item) => (
        <DetailCardTemplate key={item.name}>
          <figure>
            <img
              src='https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp'
              alt='Album'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Listen</button>
            </div>
          </div>
        </DetailCardTemplate>
      ))}
    </div>
  );
};

export default DetailCard;
