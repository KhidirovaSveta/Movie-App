import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import axios from 'axios';
import "./index.scss";

const Details = () => {
  const [details, setDetail] = useState([]);

  const { imdbID } = useParams();

  const navigate = useNavigate();

  // console.log(imdbID);

  // useEffect(() => {
  // axios.get(`https://www.omdbapi.com/?apikey=33b4a72d&s=${imdbID}`).then((respons) =>setDetail(respons.data)
  // )
  // }, [])

  // const getData = async() => {
  //     let respons = await axios.get(`https://www.omdbapi.com/?apikey=33b4a72d&s=${imdbID}`)
  //     setDetail(respons.data)
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apiKey=398de975&i=${imdbID}`)
      .then((respons) => respons.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div id="details">
      <div className="container">
        <div className="detail-page">
          <div className="info">
            <h1>{details.Title}</h1>
            <div className="rank">
              <p>IMDB Rating: {details.imdbRating}</p>
              <p>IMDB Votes: {details.imdbVotes}</p>
              <p>Runtime: {details.Runtime}</p>
              <p>Year: {details.Year}</p>
            </div>
            <p>{details.Plot}</p>

            <div className="rest-info">
              <div className="box">
                <p>Director</p>
                <p>Actors</p>
                <p>Genre</p>
                <p>Country</p>
                <p>Language</p>
                <p>Awards</p>
              </div>
              <div className="box2">
                <p>{details.Director}</p>
                <p>{details.Actors}</p>
                <p>{details.Genre}</p>
                <p>{details.Country}</p>
                <p>{details.Language}</p>
                <p>{details.Awards}</p>
              </div>
            </div>
          </div>
          <div className="poster">
            <img src={details.Poster} alt="" />
          </div>
        </div>
        <button className="backBtn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
      {/* {console.log(details)} */}
    </div>
  );
};

export default Details;
