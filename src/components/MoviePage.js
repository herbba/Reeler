import React, { useState, useEffect } from 'react';
import ItemLink from './ItemLink.js';
import CreateLinks from './CreateLinks';
import mockUp from '../mockup.js';

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [mockupUsed, setMockupUsed] = useState(false)

  /* when movieId changes, gets movie's data */
  useEffect(() => {
    const mock = mockUp.getMockup(props.location.state.tconst)
    mock
      ? setMovie(mock)
      : setMovie(props.location.state);
    mock ? setMockupUsed(true) : setMockupUsed(false)
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

  const mapImages = () => {
    return movie.images ? (
      movie.images.map((img) => (
        <div className={`pageImagesColumn ${img}`} key={img}>
          <img
            className='pageImg'
            src={require(`../images/${img}.jpg`)}
            alt={img}
          ></img>
        </div>
      ))
    ) : (
        <div>images not found</div>
      );
  };

  /* if actor has known titles, lists the links to them */
  const mapCast = () => {
    return movie.cast
      ? movie.cast.map((n) => (
        <li className='castListItem' key={n}>
          {/* If link clicked, switch routes */}
          <ItemLink baseUrl="/names/" type="nm" id={n} year={false} />
        </li>
      ))
      : '';
  };

  return mockupUsed ? (
    <div className='pageContainer'>
      <div className='pageHeaderContainer'>
        <h1 className='pageHeader movieTitle'>{movie.primarytitle}</h1>
        {movie.endyear ? (
          <h2 className='pageSubHeader'>
            {movie.startyear} - {movie.endyear}
          </h2>
        ) : (
            <h3 className='pageSubHeader movieYear'>{movie.startyear}</h3>
          )}
        <div className='pageAbstract'>
          {runTimeToHours()}
          {movie.genres ? movie.genres.join(', ') : ''}
          {' | '} {movie.released}
        </div>
        <div className='pageImagesRow'>{mapImages()}</div>
        <p className='pageAbstract'><CreateLinks text={movie.abstract} /></p>
        <div className='pageAbstract'>
          <p>Director: {movie.director}</p>
          <p>
            Writers: {movie.writers ? movie.writers.join(', ') : 'no writers'}
          </p>
          <p>Stars: {movie.stars}</p>
        </div>
      </div>
      <div>
        <h2 className='pageSubHeader'>Cast</h2>
        <ul className='cast pageAbstract'>{mapCast()}</ul>
      </div>
      <div>
        <h2 className='pageSubHeader'>Storyline</h2>
        <p className='pageAbstract'><CreateLinks text={movie.storyline} /></p>
      </div>
    </div>
  ) : (
      <div className='pageContainer'>
        {/*On click goes back to the previous page*/}
        {/* <p className='resultItem link' onClick={() => history.goBack()}>
        Back
      </p> */}
        <div className='pageHeaderContainer'>
          <p className='pageAbstract'>{movie.titletype}</p>
          <h1 className='pageHeader'>{movie.primarytitle}</h1>
          {movie.endyear ? (
            <h2 className='pageSubHeader'>
              {movie.startyear} - {movie.endyear}
            </h2>
          ) : (
              <h3 className='pageSubHeader'>{movie.startyear}</h3>
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
