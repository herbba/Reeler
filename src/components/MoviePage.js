import React, { useState, useEffect } from 'react';
import history from '../history';
import { Link } from 'react-router-dom/';
import nameService from '../services/names';
import axios from 'axios';

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [names, setNames] = useState([]);

  const bm = {
    endyear: props.location.state.endyear,
    genres: props.location.state.genres,
    isadult: props.location.state.isadult,
    originaltitle: props.location.state.originaltitle,
    primarytitle: props.location.state.primarytitle,
    runtimeminutes: props.location.state.runtimeminutes,
    startyear: props.location.state.startyear,
    tconst: props.location.state.tconst,
    titletype: props.location.state.titletype,
    released: '23 June 1989 (USA)',
    director: '[[name:Tim Burton]]',
    writers: [
      '[[name: Bob Kane]] (Batman Characters)',
      '[[name: Sam Hamm]] (story)',
    ],
    stars: 'Michael Katon, Jack Nicholson, Kim Basinger',
    cast: [
      { primaryname: 'Michael Keaton', role: 'Batman' },
      { primaryname: 'Jack Nicholson', role: 'Joker/Jack Napier' },
      { primaryname: 'Kim Basing', role: 'Vicki Vale' },
      { primaryname: 'Rober Whul', role: 'Alexander Knox' },
      { primaryname: 'Pat Hingle', role: 'Commissioner Gordon' },
      { primaryname: 'Billy Dee Williams', role: 'Harvey Dent' },
    ],
    storyline:
      "Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton). Grissom's right-hand man is Jack Napier",
    images: ['bm1', 'bm2', 'bm3'],
    abstract:
      'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker. ',
  };

  /* when movieId changes, gets movie's data */
  useEffect(() => {
    props.location.state.tconst === 'tt0096895'
      ? setMovie(bm)
      : setMovie(props.location.state);
    //getNames(); //if cast has ids
  }, [props.location.state]);

  /** gets the cast's data */
  const getNames = () => {
    setNames([]);
    const requests = props.location.state.cast.map((id) =>
      nameService.getName(id)
    );
    axios
      .all(requests)
      .then(axios.spread((...responses) => setNames(responses)));
  };

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
    return names
      ? names.map((n) => (
        <li className='castListItem' key={n.nconst}>
          {/* If link clicked, switch routes */}
          <Link
            className='link castlink'
            to={{
              pathname: `/names/${n.nconst}`,
              state: {
                birthyear: n.birthyear,
                deathyear: n.deathyear,
                knownfortitles: n.knownfortitles,
                nconst: n.nconst,
                primaryname: n.primaryname,
                primaryprofession: n.primaryprofession,
                itemId: n.const,
              },
            }}
          >
            {n.primarytitle}
          </Link>
          <p className='castrole'> - Role </p>
        </li>
      ))
      : '';
  };

  const mapMockupCast = () => {
    return movie.cast
      ? movie.cast.map((c) => (
        <li className='castListItem' key={c.primaryname}>
          <p className='link castlink'>{c.primaryname}</p>
          <p className='castrole'> - {c.role}</p>
        </li>
      ))
      : '';
  };

  return props.location.state.tconst === 'tt0096895' ? (
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
        <p className='pageAbstract'>{movie.abstract}</p>
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
        <ul className='cast pageAbstract'>{mapMockupCast()}</ul>
      </div>
      <div>
        <h2 className='pageSubHeader'>Storyline</h2>
        <p className='pageAbstract'>{movie.storyline}</p>
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
