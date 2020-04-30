/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import '../Search.css';
import '../Search.css';
import titleService from '../services/titles';
import nameService from '../services/names';
import axios from 'axios';
import Loader from '../loader.gif';
import Heart from '../images/Heart.js';
import Netflix from '../images/netflix.png';
import moviePlaceHolder from '../images/movie_placeholder.png';
import personPlaceHolder from '../images/person_placeholder.png';
import mockUp from '../mockup.js';
import ItemLink from './ItemLink.js';


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
      .map((id) => mockUp.getMockup(id) ? mockUp.getMockup(id) : titleService.getTitle(id));
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
      .map((id) => mockUp.getMockup(id) ? mockUp.getMockup(id) : nameService.getName(id));
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
        <li key={t.tconst} className='searchListItem'>
          {/* When link clicked, switches routes */}
          <img src={mockUp.getMockup(t.tconst) ? require(`../images/${t.images[0]}.jpg`) : moviePlaceHolder} className="placeholder moviepl" alt="" />
          <div className='resultItem'>
            <ItemLink type="tt" baseUrl="/titles/" id={t.tconst} year={true} />
          </div>
          <div className='searchActions'>
            <Heart />
            <a href={`https://www.netflix.com/search?q=${t.primarytitle}`} target="_blank" rel="noopener noreferrer">
              <img src={Netflix} className='netflix' alt="" />
            </a>
          </div>
        </li>
      ))
      : names.map((n) => (
        <li className='searchListItem actorlist' key={n.nconst}>
          <img alt="actor image placeholder" src={mockUp.getMockup(n.nconst) ? require(`../images/${n.images[0]}.jpg`) : personPlaceHolder} className=" placeholder personpl" />
          {/* When link clicked, switches routes */}
          <div className="resultItem">
            <ItemLink type="nm" baseUrl="/names/" id={n.nconst} year={true} />
          </div>
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
