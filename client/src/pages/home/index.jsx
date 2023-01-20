import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import Search from "../../components/search";

const { Meta } = Card;

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const inputVal = useRef();

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=33b4a72d&s=Harry`)
      .then((data) => setMovies(data.data.Search));
  }, []);

  // let handleSearch = () => {
  //   let filterSearch = movies.filter((e) => e.Title.toLocaleLowerCase().includes(inputVal.current.value.toLocaleLowerCase()))
  //   setMovies(filterSearch)
  // }

  return (
    <div id="Home">
      <div className="container">
        <Search setMovies={setMovies} />
        <h1>Movies</h1>
        {/* <input type="text"  ref={inputVal} onChange={() => handleSearch()}/> */}
        <div className="moveis">
          {movies?.map((movie) => {
            return (
              <Link to={`/home/${movie.imdbID}`}>
                <Card
                  className="card"
                  hoverable
                  style={{ width: 250 }}
                  cover={<img alt="example" src={movie.Poster} />}
                >
                  <Meta title={movie.Title} description={movie.Year} />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
