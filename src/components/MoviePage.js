import React from 'react';

const MoviePage = ({ mov }) => {
  const runTimeToHours = () => {
    const runtime = mov.runtimeminutes;
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
      <div className='movieHeader'>
        <p className='paddedText'>{mov.titletype}</p>
        <h1 className='paddedText'>{mov.primarytitle}</h1>
        {mov.endyear ? (
          <h2 className='paddedText'>
            {mov.startyear} - {mov.endyear}
          </h2>
        ) : (
          <h3 className='paddedText'>{mov.startyear}</h3>
        )}
        <div className='movieInfo'>
          {runTimeToHours()}
          {mov.genres.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
