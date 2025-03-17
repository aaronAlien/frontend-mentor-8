import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import DetailCardTemplate from "./DetailCardTemplate";
import { X } from "lucide-react";
import Borders from "./Borders";

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
    <div className='grid grid-cols-1 mx-6 md:mx-auto md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {data.map((item) => (
        <div key={item.cca3}>
          {/* main cards */}
          <CardTemplate
            item={item}
            onClick={() =>
              document
                .getElementById(`my_modal_2-${item.name.common}`)
                .showModal()
            }
          >
            <figure>
              <img
                src={item.flags?.svg}
                alt={item.name.common}
                className='object-cover w-full h-40'
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
          <dialog
            id={`my_modal_2-${item.name.common}`}
            className='modal'
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                document
                  .getElementById(`my_modal_2-${item.name.common}`)
                  .close();
              }
            }}
          >
            <div className='modal-box w-11/12 h-11/12 md:h-6/12 md:max-w-5xl md:max-h-2xl lg:max-w-7xl lg:max-h-3xl mx-auto'>
            <div className='modal-action'>
                <form method='dialog'>
                  <button
                    className='btn btn-sm btn-soft rounded-lg drop-shadow-xl absolute left-6 top-10'
                    onClick={() =>
                      document
                        .getElementById(`my_modal_2-${item.name.common}`)
                        .close()
                    }
                  >
                    <X />
                  </button>
                </form>
              </div>

              <DetailCardTemplate item={item}>
                
                <figure className='flex items-center w-2/3 rounded-lg drop-shadow-xl'>
                  <img
                    src={item.flags?.svg}
                    alt={item.name.common}
                    className='object-cover w-full'
                  />
                </figure>
                <div className='flex flex-col w-full mx-auto space-y-8 py-8 pl-12'>
                  <h2 className='card-title font-bold text-3xl'>
                    {item.name.common}
                  </h2>
                  <div className='flex w-full'>
                    <div className='flex flex-col w-1/2'>
                      <p>Native Name: {item.nativename}</p>
                      <p>Population: {item.population}</p>
                      <p>Region: {item.region}</p>
                      <p>Sub Region: {item.subregion}</p>
                      <p>Capital: {item.capital}</p>
                    </div>
                    <div className='flex flex-col w-1/2'>
                      <p>Top Level Domain: {item.tld}</p>
                      <p>Currencies:</p>
                      <p>Languages:</p>
                    </div>
                  </div>
                  <Borders borders={item.borders} />
                </div>
              </DetailCardTemplate>
            </div>
          </dialog>
        </div>
      ))}
    </div>
  );
};

export default Card;
