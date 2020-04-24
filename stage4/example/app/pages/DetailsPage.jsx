import React, {Component, Fragment} from "react";
import {moviesApi} from "../api/moviesApi";
import {Progress} from "../components/Progress";

class DetailsPage extends Component {
  state = {
    fetchProgress: false,
    fetchDone: false,
    item: {}
  }
  componentDidMount = () => {
    this.fetch(this.props.id);
  };

  fetch = async (id) => {
    this.setState({
      fetchProgress: true,
      fetchDone: false
    })
    let response = await moviesApi.getMovieDetails(id);
    this.setState({
      item: response,
      fetchProgress: false,
      fetchDone: true
    })
  };

  render() {
    let {item,fetchProgress,fetchDone} = this.state;
    return (
      <div className="container">
        <h1 className="white">Карточка фильма <Progress isProgress={fetchProgress}/></h1>
        {
          fetchDone &&
          <Fragment>
            <h3>{item.title}</h3>
            <img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>
            <div>{item.overview}</div>
          </Fragment>
        }
      </div>
    );
  }
}

export {DetailsPage}