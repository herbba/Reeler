import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom/';
import history from '../history';
import axios from 'axios';
import titleService from '../services/titles';

const ActorPage = (props) => {
  const [actor, setActor] = useState({});
  const [titles, setTitles] = useState([]);
  const [movieIds, setMovieIds] = useState([]);

  const mk = {
    birthyear: props.location.state.birthyear,
    birthday: 'September 5',
    birthplace: 'Corapolis, Pennsylvania, USA',
    deathyear: props.location.state.deathyear,
    knownfortitles: props.location.state.knownfortitles,
    nconst: props.location.state.nconst,
    primaryname: props.location.state.primaryname,
    birthname: 'Michael John Douglas',
    primaryprofession: props.location.state.primaryprofession,
    abstract:
      "Quirky, inventive and handsome American actor Michael Keaton first achieved major fame with his door-busting performance as fast-talking ideas man Bill Blazejowski, alongside a nerdish morgue attendant ([[name:Henry Winkler]]), in Night [[title:Shift]] (1982). He played further comedic roles in [[title:Varokaa, isä on irti! (1983)]], [[title:Johnny - gangsterikuningas (1984)]], and [[movie:Beetlejuice (1988)]], earned further acclaim for his dramatic portrayal of Bruce Wayne / Batman in [[name:Tim Burton]]'s [[title:Batman (1989)]] and [[title:Batman - paluu (1992)]], and since then, has moved easily between film genres, ranging from drama and romantic comedy to thriller and action.",
    fullbio:
      'Keaton was born Michael John Douglas on September 5, 1951 in Coraopolis, Pennsylvania, to Leona Elizabeth (Loftus), a homemaker, and George A. Douglas, a civil engineer and surveyor. He is of Irish, as well as English, Scottish, and German, descent.',
    images: ['mk1', 'mk2', 'mk3'],
  };
  /* const knownForIds = props.location.state.results
    ? props.location.state.results.filter((item) => item.includes('tt'))
    : {}; */

  /* when location.props.state is changed, sets the state to actors and
   * gets the data for knownfor titles
   */
  useEffect(() => {
    props.location.state.nconst === 'nm0000474'
      ? setActor(mk)
      : setActor(props.location.state);
    getTitles();
  }, [props.location.state]);

  /** gets the movies' data */
  const getTitles = () => {
    setTitles([]);
    const requests = props.location.state.knownfortitles.map((id) =>
      titleService.getTitle(id)
    );
    axios
      .all(requests)
      .then(axios.spread((...responses) => setTitles(responses)));
  };

  /* if actor has known titles, lists the links to them */
  const mapFilmo = () => {
    return titles
      ? titles.map((t) => (
          <li className='filmographyListItem' key={t.tconst}>
            {/* If link clicked, switch routes */}
            <Link
              className='link filmolink'
              to={{
                pathname: `/titles/${t.tconst}`,
                state: {
                  endyear: t.endyear,
                  genres: t.genres,
                  isadult: t.isadult,
                  originaltitle: t.originaltitle,
                  primarytitle: t.primarytitle,
                  runtimeminutes: t.runtimeminutes,
                  startyear: t.startyear,
                  tconst: t.tconst,
                  titletype: t.titletype,
                },
              }}
            >
              {t.primarytitle}
            </Link>
            <p className='filmorole'> - Role </p>
            <p className='filmoyear'> {t.startyear}</p>
          </li>
        ))
      : '';
  };

  /* if actor has professions, adds spaces bewteen the commas */
  const styleProfession = () => {
    return actor.primaryprofession
      ? actor.primaryprofession.replace(/,/g, ', ')
      : '';
  };

  const mapImages = () => {
    return actor.images ? (
      actor.images.map((img) => (
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

  return props.location.state.nconst === 'nm0000474' ? (
    <div className='pageContainer'>
      <div className='pageHeaderContainer'>
        <h1 className='pageHeader'>{actor.primaryname}</h1>
        <div className='pageImagesRow'>{mapImages()}</div>
        <p className='pageAbstract'>{actor.abstract}</p>
        <div className='pageAbstract'>
          <p>
            Born: {actor.birthday}
            {', '}
            {actor.birthyear ? actor.birthyear : 'unknown'}
            {' in '}
            {actor.birthplace}
          </p>
          <p>{actor.deathyear ? 'Died: ' + actor.deathyear : ''}</p>
          <p>Birth Name: {actor.birthname}</p>
        </div>
      </div>
      <div>
        <h2 className='pageSubHeader'>Filmography</h2>
        <ul className='filmography pageAbstract'>{mapFilmo()}</ul>
      </div>
      <div>
        <h2 className='pageSubHeader'>Full bio</h2>
        <p className='pageAbstract'>{actor.fullbio}</p>
      </div>
    </div>
  ) : (
    <div className='pageContainer'>
      {/*On click goes back to the previous page*/}
      {/* <p className='resultItem link' onClick={() => history.goBack()}>
        Back
      </p>
 */}
      <div className='pageHeaderContainer'>
        <h1 className='pageHeader'>{actor.primaryname}</h1>
        <p className='pageAbstract'>{styleProfession()}</p>
        <div className='pageAbstract'>
          <p>Born: {actor.birthyear ? actor.birthyear : 'unknown'}</p>
          <p>{actor.deathyear ? 'Died: ' + actor.deathyear : ''}</p>
        </div>
      </div>
      <div>
        <h2 className='pageSubHeader'>Filmography</h2>
        <ul>{mapFilmo()}</ul>
      </div>
    </div>
  );
};

export default ActorPage;
