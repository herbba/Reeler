/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
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
  const mapResults = (data, visible) =>
    data.slice(0, visible).map((res) => (
      <li key={res}>
        <p className='resultItem link' onClick={(e) => onItemClick(res, e)}>
          {res}
        </p>
      </li>
    ));

  const resultDiv = (type, data, visibility) => (
    <div>
      <h2>{type}</h2>
      <ul>{mapResults(data, visibility)}</ul>
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
      {/* <div>
        <h2>Movies</h2>
        <ul>{mapMovieResults()}</ul>
        {movies && movies.length > 4 ? (
          <p className='resultItem link' onClick={() => loadMore('m')}>
            More results
          </p>
        ) : (
          <></>
        )}
      </div> */}
      {resultDiv('Movies', movies, mVisible)}
      {resultDiv('Actors', actors, aVisible)}
    </div>
  );
};

export default SearchResult;
