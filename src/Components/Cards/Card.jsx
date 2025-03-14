import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import DetailCardTemplate from "./DetailCardTemplate";

const Card = ({ item }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("src/data/data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
      {data.map((item) => (
        <div key={item.name}>
          {/* Card Component */}
          <CardTemplate item={item} onClick={() => document.getElementById(`modal-${item.name}`).showModal()}>
            <figure>
              <img src={item.flags.svg} alt={item.name} className="object-cover lg:w-full lg:h-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{item.name}</h2>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </CardTemplate>

          {/* Unique Modal for Each Card */}
          <dialog id={`modal-${item.name}`} className="modal">
            <div className="modal-box">
              <DetailCardTemplate item={item}>
              <figure>
              <img src={item.flags.svg} alt={item.name} className="object-cover lg:w-full lg:h-40" />
            </figure>
              <h2 className="card-title font-bold">{item.name}</h2>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
              </DetailCardTemplate>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
              
            </div>

          </dialog>
        </div>
      ))}
      </div>
    );
};

export default Card;
