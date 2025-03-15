import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import DetailCardTemplate from "./DetailCardTemplate";

const Card = ({ item }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // wrapped in useeffct - sort alphabetically

    const apiUrl = "https://restcountries.com/v3.1/all";

    // fetch from api
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        const sortedData = json.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setData(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {data.map((item) => (
        <div key={item.cca3}>
          {/* main cards */}
          <CardTemplate
            item={item}
            onClick={() =>
              document.getElementById(`modal-${item.name.common}`).showModal()
            }
          >
            <figure>
              <img
                src={item.flags?.svg}
                alt={item.name.common}
                className='object-cover lg:w-full lg:h-40'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title font-bold'>{item.name.common}</h2>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </CardTemplate>

          {/* modal intead of page */}
          <dialog id={`modal-${item.name.common}`} className='modal'>
            <div className='modal-box'>
              <DetailCardTemplate item={item}>
                <figure>
                  <img
                    src={item.flags?.svg}
                    alt={item.name.common}
                    className='object-cover lg:w-full lg:h-40'
                  />
                </figure>
                <h2 className='card-title font-bold'>{item.name.common}</h2>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
              </DetailCardTemplate>
              <div className='modal-action'>
                <form method='dialog'>
                  <button className='btn'>Close</button>
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
