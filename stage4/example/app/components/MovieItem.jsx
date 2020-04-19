import React, {useState} from "react";
import {Link} from "@reach/router";
import moment from "moment";

const MovieItem = props => {
  let [imgReady, setState] = useState(false);
  let {movie} = props;
  return (
    <Link className="movies-item mb-50" key={movie.id} to={`/movie/${movie.id}`}>
      <img onLoad={() => setState({imgReady: true})} className={`movie-cover mb-10 fade ${imgReady ? 'in' : ''}`} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
      <div className="movie-title">
        <div className="movie-vote mr-15" title="Рейтинг">{movie.vote_average}</div>
        <div>
          <div className="mb-10">{movie.title}</div>
          <div className="movie-date">{moment(movie.release_date).format("DD MMMM YYYY")}</div>
        </div>
      </div>

    </Link>
  )
};

export {MovieItem}