import React from 'react';

const MoviePage = ({ mov }) => {
  /*  const mov = {
    id: 12345,
    titleType: 'title type',
    primaryTitle: 'MOVIE 1',
    originalTitle: 'original title',
    isAdult: true,
    startYear: 2017,
    endYear: null,
    runtimeMinutes: 190,
    genres: ['genre1', 'genre2']
  }; */

  const runTimeToHours = () => {
    const runtime = mov.runtimeminutes;
    const hours = runtime / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + ' h ' + rminutes + ' min';
  };

  return (
    <div className='movieHeader'>
      <h2>{mov.primarytitle}</h2>
      {mov.endyear ? (
        <h3>
          {mov.startyear} - {mov.endyear}
        </h3>
      ) : (
        <h3>{mov.startyear}</h3>
      )}
      <div className='movieInfo'>
        {runTimeToHours()} | {mov.genres.join(', ')}
      </div>
    </div>
  );
};

export default MoviePage;
