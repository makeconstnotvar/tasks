import React, {Component, useState} from 'react';
import {Pager} from "components/Pager";
import {Progress} from "components/Progress";
import qs from 'qs';
import isEqual from 'lodash/isEqual';

class MoviesTopPage extends Component {
  componentDidMount() {
    let newQuery = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
    this.props.$pager.setCurrentPage(newQuery.page)
    this.fetch();
  };

  componentDidUpdate(prevProps) {
    console.log('-MoviesTopPage-')
    let oldQuery = qs.parse(prevProps.location.search, {ignoreQueryPrefix: true});
    let newQuery = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
    let {$pager} = this.props;
    $pager.setCurrentPage(newQuery.page)
    let eq = isEqual(oldQuery, newQuery)
    if (!eq)
      this.fetch();

    console.log(prevProps, this.props)
  };

  fetch = async () => {
    let {$topMovies, $pager} = this.props;
    await $topMovies.fetchItems({page: $pager.currentPage});
    $pager.total = $topMovies.total
  };

  render() {
    let {$topMovies} = this.props;
    return (
      <div className="container">
        <h1 className="white">Лучшие фильмы <Progress isProgress={$topMovies.fetchProgress}/></h1>
        <Pager/>
        <div className={`movies grid5 gg-15 ${$topMovies.fetchProgress ? 'hidden' : ''}`}>
          {
            $topMovies.items.map(movie => <Item key={movie.id} movie={movie}/>)
          }
        </div>
      </div>
    );
  }
}


export {MoviesTopPage}