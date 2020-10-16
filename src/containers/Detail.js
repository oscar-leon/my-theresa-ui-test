import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieDetail from "../services/getMovieDetail";
import "./Detail.scss";

const SRC_IMG_BASE = process.env.POSTER_URL; // TODO: refactor to a util to grab all images around the app.
const SRC_IMG_SIZE_XL = "/w342"; // TODO: same here, move to constants/config file.

const Detail = () => {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMovieDetail(id).then(setMovieData);
  }, []);

  return (
    <div className="detail-wrapper">
      <div className="detail-top-area">
        <div className="detail__image-container">
          <div className="detail__image-wrapper">
            {movieData.poster_path && (
              <img
                src={`${SRC_IMG_BASE}${SRC_IMG_SIZE_XL}${movieData.poster_path}`}
                alt=""
              />
            )}
          </div>
        </div>

        <div className="detail-description">
          <div className="detail-description__data">
            <span className="tag">Title: </span>
            {movieData.title}
          </div>
          <div className="detail-description__data">
            <span className="tag">Overview: </span>
            {movieData.overview}
          </div>
        </div>
      </div>
      <div className="detail-bottom-area">
        <div className="detail-description__data">
          <span className="tag">Original Title: </span>
          {movieData.original_title}
        </div>

        <div className="detail-description__data">
          <span className="tag">Status: </span>
          {movieData.status}
        </div>

        {movieData.homepage && (
          <div className="detail-description__data">
            <span className="tag">Homepage: </span>
            {movieData.homepage}
          </div>
        )}

        {movieData.tagline && (
          <div className="detail-description__data">
            <span className="tag">Tagline: </span>
            {movieData.tagline}
          </div>
        )}
      </div>
    </div>
  );
};

Detail.propTypes = {};

export default Detail;
