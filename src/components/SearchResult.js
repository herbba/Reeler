/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/';
import '../Search.css';
import '../Search.css';
import titleService from '../services/titles';
import nameService from '../services/names';
import axios from 'axios';
import Loader from '../loader.gif';

const SearchResult = (props) => {
  const [loading, setLoading] = useState(false);
  const [mVisible, setMVisible] = useState(4);
  const [aVisible, setAVisible] = useState(4);
  const [titles, setTitles] = useState([]);
  const [names, setNames] = useState([]);
  const movieIds = props.location.state.results
    ? props.location.state.results.filter((item) => item.includes('tt'))
    : {};
  const actorIds = props.location.state.results
    ? props.location.state.results.filter((item) => item.includes('nm'))
    : {};

  /** when results changes, gets the movies' data */
  /** DO NOT ADD THE MISSING DEPENDENCIES*/
  useEffect(() => {
    getTitles();
    getNames();
  }, [props.location.state.results]);

  /** when movies' visibility is changed, gets the movies' data  */
  /** DO NOT ADD THE MISSING DEPENDENCY 'movieIds', creates infinite rendering*/
  useEffect(() => {
    getTitles();
  }, [mVisible]);

  /** when actors' visibility is changed, gets the actors' data */
  /** DO NOT ADD THE MISSING DEPENDENCY 'actorIds', creates infinite rendering*/
  useEffect(() => {
    getNames();
  }, [aVisible]);

  /** gets the movies' data */
  const getTitles = () => {
    setTitles([]);
    const requests = movieIds
      .slice(0, mVisible)
      .map((id) => titleService.getTitle(id));
    axios
      .all(requests)
      .then(axios.spread((...responses) => setTitles(responses)));
    setLoading(false);
  };

  /** gets the actors' data */
  const getNames = () => {
    setNames([]);
    const requests = actorIds
      .slice(0, aVisible)
      .map((id) => nameService.getName(id));
    axios
      .all(requests)
      .then(axios.spread((...responses) => setNames(responses)))
      .catch((err) => console.log('error', err));
    setLoading(false);
  };

  /** how many results are shown in each section
   * @param {*} type tt = movies, nm = actors
   */
  const loadMore = (type) => {
    setLoading(true);
    type === 'Movies' ? setMVisible(mVisible + 4) : setAVisible(aVisible + 4);
  };

  /** creates the link list items for results
   * @param {*} type tt = movies, nm = actors
   * @param {*} visible how many results are shown
   * @param {*} baseUrl /titles/ for movies, /names/ for actors
   */
  const mapListItems = (type, visible, baseUrl) => {
    return type === 'Movies'
      ? titles.map((t) => (
          <li key={t.tconst}>
            {/* When link clicked, switches routes */}
            <Link
              to={{
                pathname: `${baseUrl}${t.tconst}`,
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
              <p className='resultItem link'>
                {t.primarytitle} ({t.startyear}) {t.titletype}
              </p>
            </Link>
          </li>
        ))
      : names.map((n) => (
          <li key={n.nconst}>
            {/* When link clicked, switches routes */}
            <Link
              to={{
                pathname: `${baseUrl}${n.nconst}`,
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
              <p className='resultItem link'>
                {n.primaryname} ({n.birthyear}) {n.primaryprofession}
              </p>
            </Link>
          </li>
        ));
  };

  /* Shows the right results according to the result id */
  const resultDiv = (type, data, visibility, baseUrl) => (
    <div>
      <h2 className='paddedText'>{type}</h2>
      <ul>{mapListItems(type, visibility, baseUrl)}</ul>
      {data && data.length > visibility ? (
        <p className='resultItem link' onClick={() => loadMore(type)}>
          More results
        </p>
      ) : (
        <></>
      )}
    </div>
  );

  return (
    <div className='results'>
      {/*	Loader*/}
      <img
        src={Loader}
        className={`search-loading ${loading ? 'show' : 'hide'}`}
        alt='loader'
      />
      {resultDiv('Movies', movieIds, mVisible, '/titles/')}
      {resultDiv('Actors', actorIds, aVisible, '/names/')}
    </div>
  );
};

export default SearchResult;
