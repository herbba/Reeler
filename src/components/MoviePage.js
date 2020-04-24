import React, { useState, useEffect } from 'react';
import history from '../history';

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});

  /* when movieId changes, gets movie's data */
  useEffect(() => {
    setMovie(props.location.state);
  }, [props.location.state]);

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
    <div className='pageContainer'>
      {/*On click goes back to the previous page*/}
      {/* <p className='resultItem link' onClick={() => history.goBack()}>
        Back
      </p> */}
      <div className='pageHeaderContainer'>
        <p className='pageAbstract'>{movie.titletype}</p>
        <h1 className='pageHeader'>{movie.primarytitle}</h1>
        {movie.endyear ? (
          <h2 className='pageAbstract'>
            {movie.startyear} - {movie.endyear}
          </h2>
        ) : (
          <h3 className='pageAbstract'>{movie.startyear}</h3>
        )}
        <div className='pageAbstract'>
          {runTimeToHours()}
          {movie.genres ? movie.genres.join(', ') : ''}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
