import React, { useState, useEffect } from 'react';
import titleService from '../services/titles';

/* TODO */
/* When using the browser's back-button, url changes but the view doesn't, same in actorPage.js */

const MoviePage = (props) => {
  const movieId = props.location.state.itemId;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    titleService.getTitle(movieId).then((res) => setMovie(res));
  }, [movieId]);

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
      {/* <button className='resultItem link' onClick={props.history.goBack()}>
        Back
      </button> */}
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
          {/*movie.genres.join(', ')*/}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
