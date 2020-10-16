import React, { useEffect, useState } from "react";
import Carousel from "../components";
import getRandomGenres from "../services/getRandomGenres";

const Home = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getRandomGenres().then(setGenres);
  }, []);

  return (
    <div className="container">
      {genres.map(({ id, name }) => (
        <Carousel key={id} name={name} id={id} />
      ))}
    </div>
  );
};

export default Home;
