import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../utils/utilities";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [moviedetail, setMoviedetail] = useState(null);

  useEffect(() => {
    const view = async () => {
      try {
        const viewMovie = await getMovieDetails(movie_id);
        setMoviedetail(viewMovie);
      } catch (error) {
        console.log(error);
      }
    };
    view();
  }, [movie_id]);

  return (
    <>
      {moviedetail && (
        <>
          <div>
            <div>
              <div>
                <p>{moviedetail.adult}</p>
                <img src={`${IMAGE_BASE_URL}${moviedetail.poster_path}`} alt={moviedetail.title} />
                <div>
                  {/* <span>&#9679;</span>
                  <span>&#9679;</span> */}
                  <div>{moviedetail.title} </div>
                </div>
                <div>
                  <p>{moviedetail.vote_count}</p>
                </div>
              </div>
              <div>
                <p>{moviedetail.overview}</p>
              </div>
            </div>
            <div>
              <div>
                <button>Watch Now</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;