import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {Link} from "@reach/router";
import first from "lodash/first";
import last from "lodash/last";


const Pager = props => {
  let visiblePagesCount = props.visiblePagesCount;
  let offset = Math.floor(visiblePagesCount / 2);
  let maxPagesCount = Math.ceil(props.total / props.pageSize) || 1;
  let pages = [];
  let start = 1;
  let query = qs.parse(location.search, {ignoreQueryPrefix: true});
  let currentPage = props.currentPage;

  if (props.currentPage > offset) {
    start = props.currentPage - offset;
    if (start > maxPagesCount - visiblePagesCount + 1 && maxPagesCount >= visiblePagesCount) {
      start = maxPagesCount - visiblePagesCount + 1;
    }
  }

  if (start + visiblePagesCount > maxPagesCount) {
    visiblePagesCount = Math.abs(maxPagesCount - start) + 1;
  }

  for (let i = 0; i < visiblePagesCount; ++i) {
    pages.push(i + start);
  }

  let isPrev = first(pages) > 1;
  let isNext = last(pages) < maxPagesCount;

  return (
    <div className="pager mb-20">
      {
        isPrev &&
        <Link to={`${location.pathname}?${qs.stringify({...query, page: currentPage - 1})}`} className="page undecorate pointer"><i className="fas fa-arrow-left"/></Link>
      }
      {
        pages.map(page => <Link to={`${location.pathname}?${qs.stringify({...query, page})}`} className={`page undecorate pointer ${page === currentPage ? 'active' : ''}`} key={page}>{page}</Link>)
      }
      {
        isNext &&
        <Link to={`${location.pathname}?${qs.stringify({...query, page: currentPage + 1})}`} className="page undecorate pointer"><i className="fas fa-arrow-right"/></Link>
      }
    </div>
  );
}

Pager.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  visiblePagesCount: PropTypes.number,
  total: PropTypes.number
}

Pager.defaultProps = {
  currentPage: 1,
  pageSize: 20,
  visiblePagesCount: 5,
  total: 0
}

export {Pager};