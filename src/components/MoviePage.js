import React, { useState, useEffect } from 'react';
import titleService from '../services/titles';
import history from '../history';

const MoviePage = (props) => {
  const movieId = props.location.state.itemId;
  const [movie, setMovie] = useState({});

  /* when movieId changes, gets movie's data */
  useEffect(() => {
    titleService.getTitle(movieId).then((res) => setMovie(res));
  }, [movieId]);

  /* calculates minutes to hours and minutes. Doesn't show ex. 0h 10min or 2h 0min*/
  const runTimeToHours = () => {
    const runtime = movie.runtimeminutes;
    const hours = runtime / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    const returnvalue =
      rhours === 0 && rminutes === 0
        ? null
        : rhours === 0 && rminutes !== 0
        ? rminutes + ' min | '
        : rhours !== 0 && rminutes === 0
        ? rhours + ' h | '
        : rhours + ' h ' + rminutes + ' min | ';
    return returnvalue;
  };

  return (
    <div className='movieContainer'>
      {/*On click goes back to the previous page*/}
      <p className='resultItem link' onClick={() => history.goBack()}>
        Back
      </p>
      <div className='movieHeader'>
        <p className='paddedText'>{movie.titletype}</p>
        <h1 className='paddedText'>{movie.primarytitle}</h1>
        {movie.endyear ? (
          <h2 className='paddedText'>
            {movie.startyear} - {movie.endyear}
          </h2>
        ) : (
          <h3 className='paddedText'>{movie.startyear}</h3>
        )}
        <div className='movieInfo'>
          {runTimeToHours()}
          {movie.genres ? movie.genres.join(', ') : ''}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
