/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../Search.css';

const SearchResult = ({ results, onItemClick }) => {
  /*
    MOVIE {
    id: string,
    titleType: string,
    primaryTitle: string,
    originalTitle: string,
    isAdult: boolean,
    startYear: number,
    endYear: number | null,
    runtimeMinutes: number,
    genres: [string]
    }

    PERSON {
        id: string,
        primaryName: string,
        birthYear: number | null,
        deathYear: number | null,
        primaryProfession: [string],
        knownForTitles: [string]
    }

*/

  //kutsu näin: <ul>{mapPlaceholder()}</ul>
  const mapMovieResults = () =>
    results.map((mov) => (
      <li key={mov}>
        <p className='resultItem' onClick={(e) => onItemClick(mov, e)}>
          {mov}
        </p>
      </li>
    ));

  /*  const mapPersonResults = () =>
    results.map((name) => (
      <li key={name}>
        name
        <button onClick={onClick(person, false)}>{person.primaryName}</button>
      </li>
    )); */

  return (
    <div className='results'>
      <h3>Movies</h3>
      <ul>{mapMovieResults()}</ul>
    </div>
  );
};

export default SearchResult;
