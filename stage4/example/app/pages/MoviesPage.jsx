import React, {Component, useState} from 'react';
import {Pager} from "components/Pager";
import {Progress} from "components/Progress";
import qs from 'qs';
import isEqual from 'lodash/isEqual';
import {MovieItem} from "../components/MovieItem";
import {moviesApi} from "../api/moviesApi";

class MoviesPage extends Component {
  state = {
    fetchProgress: false,
    fetchDone: false,
    items: [],
    total: 0,
    page:1
  }

  componentDidMount() {
    let newQuery = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
    this.fetch({page: newQuery.page});
  };

  componentDidUpdate(prevProps) {
    let oldQuery = qs.parse(prevProps.location.search, {ignoreQueryPrefix: true});
    let newQuery = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
    if (!isEqual(oldQuery, newQuery))
      this.fetch({page: newQuery.page});
  };

  fetch = async (params) => {
    this.setState({
      fetchProgress: true,
      fetchDone: false,
      page: +params.page||1
    })
    let response = await moviesApi.getTopMovies(params);
    this.setState({
      items: response.results,
      total: response.total_results,
      fetchProgress: false,
      fetchDone: true
    })
  }

  render() {
    let {
      fetchProgress,
      items,
      total,
      page
    }=this.state;
    return (
      <div className="container">
        <h1 className="white">Лучшие фильмы <Progress isProgress={fetchProgress}/></h1>
        <Pager total={total} currentPage={page}/>
        <div className={`movies ${fetchProgress ? 'hidden' : ''}`}>
          {
            items.map(movie => <MovieItem key={movie.id} movie={movie}  width={300}/>)
          }
        </div>
      </div>
    );
  }
}


export {MoviesPage}