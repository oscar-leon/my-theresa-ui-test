import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import getLatestByGenre from "../../services/getLatestByGenre";
import "./Carousel.scss";

const SRC_IMG_BASE = process.env.POSTER_URL; // TODO: refactor to a util to grab all images around the app.
const SRC_IMG_SIZE_S = "/w154"; // TODO: same here, move to constants/config file.

const Carousel = ({ name, id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getLatestByGenre(id).then(({ results }) => {
      setItems(results);
    });
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-title">{name}</div>
      <div className="carousel">
        {items.map(item => {
          return (
            <Link key={item.id} to={`/detail/${item.id}`}>
              <img
                alt={item.title}
                className="carousel__photo"
                src={`${SRC_IMG_BASE}${SRC_IMG_SIZE_S}${item.poster_path}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};

export default Carousel;
