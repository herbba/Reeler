/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Link } from 'react-router-dom/';

import '../Search.css';

const SearchResult = ({ results, onItemClick }) => {
  const [mVisible, setMVisible] = useState(4);
  const [aVisible, setAVisible] = useState(4);
  const [movies, setMovies] = useState(
    results.filter((result) => result.charAt(0) === 't')
  );
  const [actors, setActors] = useState(
    results.filter((result) => result.charAt(0) === 'n')
  );

  const loadMore = (type) => {
    type === 'm' ? setMVisible(mVisible + 4) : setAVisible(aVisible + 4);
  };

  //kutsu näin: <ul>{mapActorResults()}</ul>
  const mapResults = (data, visible, baseUrl) =>
    data.slice(0, visible).map((resId) => (
      <li key={resId}>
        <Link to={`${baseUrl}${resId}`}>
          <p className='resultItem link'>{resId}</p>
        </Link>
      </li>
    ));

  const resultDiv = (type, data, visibility, baseUrl) => (
    <div>
      <h2 className='paddedText'>{type}</h2>
      <ul>{mapResults(data, visibility, baseUrl)}</ul>
      {data && data.length > visibility ? (
        <p
          className='resultItem link'
          onClick={() => (type === 'Movies' ? loadMore('m') : loadMore('n'))}
        >
          More results
        </p>
      ) : (
        <></>
      )}
    </div>
  );

  return (
    <div className='results'>
      {resultDiv('Movies', movies, mVisible, '/titles/')}
      {resultDiv('Actors', actors, aVisible, '/names/')}
    </div>
  );
};

export default SearchResult;
