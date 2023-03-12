import React, { useState } from "react";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avenger Infinity War",
      year: "2018",
      rating: 5,
      img: "https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg",
    },
    {
      name: "Avenger Infinity War",
      year: "2018",
      rating: 5,
      img: "https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg",
    },
    {
      name: "Avenger Infinity War",
      year: "2018",
      rating: 5,
      img: "https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg",
    },
    {
      name: "Avenger Infinity War",
      year: "2018",
      rating: 5,
      img: "https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg",
    },
  ]);
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="card shadow-lg p-2 hover:-translate-y-2 transition-all cursor-pointer md:mt-0 mt-3"
          >
            <img className="h-65 w-60" src={e.img} />
            <h1>
              <span className="text-blue-400">Name:</span> {e.name}
            </h1>
            <h1>
              <span className="text-blue-400">Rating:</span> {e.rating}
            </h1>
            <h1>
              <span className="text-blue-400">Year: </span> {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
