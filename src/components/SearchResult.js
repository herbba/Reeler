/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../Search.css';

const SearchResult = ({ results, onItemClick }) => {
  /* const testMovies = [
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
      id: 64321,
      primaryName: 'primary name 2',
      birthYear: 1980,
      deathYear: null,
      primaryProfession: ['profession1', 'profession2'],
      knownForTitles: ['movie1', 'movie2', 'series1']
    },
    {
      id: 74321,
      primaryName: 'primary name 3',
      birthYear: 1980,
      deathYear: null,
      primaryProfession: ['profession1', 'profession2'],
      knownForTitles: ['movie1', 'movie2', 'series1']
    }
  ]; */
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
      <li key={result.id}>
        <p
          onClick={e =>
            onItemClick(
              {
                id: result.id,
                titleType: result.type,
                primaryTitle: result.user,
                originalTitle: result.largeImageURL,
                isAdult: true,
                startYear: result.previewWidth,
                endYear: null,
                runTimeMinutes: result.webFormatWidth,
                genres: result.tags
              },
              true,
              e
            )
          }
        >
          {result.user}
        </p>
      </li>
    ));

  /* //kutsu näin: <ul>{mapPlaceholder()}</ul>
  const mapMovieResults = () =>
    testMovies.map(movie => (
      <li key={movie.id}>
        person
         <button onClick={onClick(movie, true)}>
          {movie.primaryTitle} ({movie.startYear})
        </button> 
      </li>
    ));

  const mapPersonResults = () =>
    testPersons.map(person => (
      <li key={person.id}>
        person
        <button onClick={onClick(person, false)}>{person.primaryName}</button> 
      </li>
    )); */

  return (
    <>
      <h3>Movies</h3>
      <ul>{mapPlaceholder()}</ul>
    </>
  );
};

export default SearchResult;
