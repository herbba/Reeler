/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Link } from 'react-router-dom/';
import '../Search.css';
import '../Search.css';

const SearchResult = (props) => {
  const [mVisible, setMVisible] = useState(4);
  const [aVisible, setAVisible] = useState(4);
  const movies = props.location.state.results.filter((item) =>
    item.includes('tt')
  );
  const actors = props.location.state.results.filter((item) =>
    item.includes('nm')
  );

  const loadMore = (type) => {
    type === 'tt' ? setMVisible(mVisible + 4) : setAVisible(aVisible + 4);
  };

  //kutsu näin: <ul>{mapActorResults()}</ul>
  const mapResults = (data, visible, baseUrl) =>
    data.slice(0, visible).map((resId) => (
      <li key={resId}>
        <Link
          to={{
            pathname: `${baseUrl}${resId}`,
            state: {
              itemId: resId,
              results: props.location.state.results,
              pathname: props.location.pathname,
            },
          }}
        >
          <p className='resultItem link'>{resId}</p>
        </Link>
      </li>
    ));

  const resultDiv = (type, data, visibility, baseUrl) => (
    <div>
      <h2 className='paddedText'>{type === 'tt' ? 'Movies' : 'Actors'}</h2>
      <ul>{mapResults(data, visibility, baseUrl)}</ul>
      {data && data.length > visibility ? (
        <p className='resultItem link' onClick={() => loadMore(type)}>
          More results
        </p>
      ) : (
        <></>
      )}
    </div>
  );

  return (
    <div className='results'>
      {resultDiv('tt', movies, mVisible, '/titles/')}
      {resultDiv('nm', actors, aVisible, '/names/')}
    </div>
  );
};

export default SearchResult;
