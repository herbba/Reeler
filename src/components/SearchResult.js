/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../Search.css';

const SearchResult = ({ results }) => {
  const testMovies = [
    {
      id: 12345,
      titleType: 'title type',
      primaryTitle: 'MOVIE 1',
      originalTitle: 'original title',
      isAdult: true,
      startYear: 2017,
      endYear: 2020,
      runtimeMinutes: 190,
      genres: ['genre1', 'genre2']
    },
    {
      id: 12346,
      titleType: 'title type',
      primaryTitle: 'MOVIE 2',
      originalTitle: 'original title',
      isAdult: true,
      startYear: 2017,
      endYear: 2020,
      runtimeMinutes: 190,
      genres: ['genre1', 'genre2']
    },
    {
      id: 12347,
      titleType: 'title type',
      primaryTitle: 'MOVIE 3',
      originalTitle: 'original title',
      isAdult: true,
      startYear: 2017,
      endYear: 2020,
      runtimeMinutes: 190,
      genres: ['genre1', 'genre2']
    }
  ];

  const testPersons = [
    {
      id: 54321,
      primaryName: 'primary name 1',
      birthYear: 1980,
      deathYear: null,
      primaryProfession: ['profession1', 'profession2'],
      knownForTitles: ['movie1', 'movie2', 'series1']
    },
    {

      id: 54322,

      primaryName: 'primary name 2',
      birthYear: 1980,
      deathYear: null,
      primaryProfession: ['profession1', 'profession2'],
      knownForTitles: ['movie1', 'movie2', 'series1']
    },
    {

      id: 543213,

      primaryName: 'primary name 3',
      birthYear: 1980,
      deathYear: null,
      primaryProfession: ['profession1', 'profession2'],
      knownForTitles: ['movie1', 'movie2', 'series1']
    }
  ];
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

  const mapPlaceholder = () =>
    results.map(result => (
      <a key={result.id} href={result.previewURL} className='result-item'>
        <h6 className='image-username'>{result.user}</h6>
        <div className='image-wrapper'>
          <img
            className='image'
            src={result.previewURL}
            alt={`${result.username} image`}
          />
        </div>
      </a>
    ));

  //kutsu näin: <ul>{mapPlaceholder()}</ul>
  const mapMovieResults = () =>
    testMovies.map(movie => (
      <li key={movie.id}>
        <p>
          {movie.primaryTitle} ({movie.startYear})
        </p>
      </li>
    ));

  const mapPersonResults = () =>
    testPersons.map(person => (
      <li key={person.id}>
        <p>{person.primaryName}</p>
      </li>
    ));

  return (

    <div className='results'>

      <h3>Movies</h3>
      <ul>{mapMovieResults()}</ul>
      <h3>Actors</h3>
      <ul>{mapPersonResults()}</ul>

    </div>

  );
};

export default SearchResult;
