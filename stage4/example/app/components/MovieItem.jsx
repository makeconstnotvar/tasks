import React, {useState} from "react";
import {Link} from "@reach/router";
import moment from "moment";

const MovieItem = props => {
  let [imgReady, setState] = useState(false);
  let {movie} = props;
  return (
    <Link className="movies-item mb-50 flex-col" key={movie.id} to={`/movie/${movie.id}`}>
      <img onLoad={() => setState({imgReady: true})} className={`movie-cover mb-10 fade ${imgReady ? 'in' : ''}`} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
      <div className="movie-title">
        <span className="movie-vote inline-block mr-15" title="Рейтинг">{movie.vote_average}</span>
        <span className="ml-auto">{movie.title}</span>
      </div>
      <span className="grey-600">{moment(movie.release_date).format("DD MMMM YYYY")}</span>
    </Link>
  )
};

export {MovieItem}