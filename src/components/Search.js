/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../Search.css';
import Loader from '../loader.gif';
import Logo from '../images/logo.png';
import Menu from '../images/menu.png';
import PageNavigation from './PageNavigation';
import searchService from '../services/searchResults';
import cancelService from '../services/cancel';
import titleService from '../services/titles';
import nameService from '../services/names';
import SearchResult from './SearchResult';

import MoviePage from './MoviePage';
import ActorPage from './ActorPage';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [item, setItem] = useState(null);
  const [itemType, setItemType] = useState('true');
  const [cancel, setCancel] = useState('');
  const [search, setSearch] = useState(false);

  /**
   * Fetch the search results and update the state with the result.
   * Also cancels the previous query before making the new one.
   *
   * @param {int} updatedPageNo Updated Page No.
   * @param {String} query Search Query.
   *
   */
  const fetchSearchResults = (updatedPageNo = '', query) => {
    //const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';

    if (cancel) {
      cancel.cancel();
    }

    setCancel(cancelService.cancelToken);

    searchService
      .getResults(query)
      .then((res) => {
        const resultNotFoundMsg = !res.results.length
          ? 'ei oo mitään muuta'
          : '';
        setResults(res.results);
        setMessage(resultNotFoundMsg);
        setLoading(false);
      })
      .catch((error) => {
        if (cancelService.isCancel(error) || error) {
          setLoading(false);
          setMessage('EI LÖYTYNY DATAA fetchSearchResults');
        }
      });
  };

  /**
   * When enter is pressed search results will be fetched
   */
  const handleOnInputChange = (event) => {
    if (event.keyCode === '13' || event.key === 'Enter') {
      const query = event.target.value;

      if (!query) {
        setResults({});
        setMessage('');
      } else {
        setLoading(true);
        setMessage('');
        setSearch(true);
        fetchSearchResults(1, query);
      }
    }
  };

  /**
   * Fetch results according to the prev or next page requests.
   *
   * @param {String} type 'prev' or 'next'
   */
  const handlePageClick = (type) => {
    //event.preventDefault();
    if (!loading) {
      setLoading(true);
      setMessage('');
      fetchSearchResults(query);
    }
  };

  /**
   * shows current item's information
   *
   */
  const showItem = () => {
    if (itemType === 'movie' || 'short' || 'tvseries') {
      console.log('movie');
      return (
        <>
          <button onClick={() => setItem(null)}>back</button>
          <MoviePage mov={item} />
        </>
      );
    } else {
      return <ActorPage actor={item} />;
    }
  };

  /**
   * Eventhandler for clicking search results
   * Gets a movie element and sets it to item and updates isMovie
   *
   * @param {String} itemId items id ie. tt12456
   * @param {Boolean} isMovie true if item is movie, false is not.
   * @param {event} e default event when item is clicked
   *
   */
  const itemUpdate = (itemId, e) => {
    e.preventDefault();
    if (itemId.charAt(0) === 't') {
      titleService
        .getTitle(itemId)
        .then((res) => {
          setItem(res);
          setItemType(res.titletype.trim());
          setLoading(false);
        })
        .catch((error) => {
          if (cancelService.isCancel(error) || error) {
            setLoading(false);
            setMessage('EI LÖYTYNY DATAA itemupdate');
            console.log('itemupdaterror', error);
          }
        });
    } else {
      //TÄHÄN /names/id:stä hakeminen
      console.log("Choosing a name doesn't work yet, choose a title instead");
    }
  };

  /**
   * Displays search results on the page
   */
  const showSearchResults = () => {
    if (Object.keys(results).length && results.length) {
      return (
        <>
          <SearchResult results={results} onItemClick={itemUpdate} />;
        </>
      );
    }
  };

  /**
   * event handler for clicking on menu
   */
  const handleMenu = () => {
    setSearch(false);
    setResults({});
  };

  return (
    <div className='container'>
      <div className='palkki' />
      <div className='header'>
        <img className='menu' src={Menu} alt='menu' onClick={handleMenu}></img>
        <div className={`content ${search ? 'ylos' : 'alas'}`}>
          {/*	Heading*/}
          <div>
            <img
              className={`logo ${search ? 'hide' : 'show'}`}
              src={Logo}
              alt='Logo'
            ></img>
          </div>
          {/* Search Input*/}
          <label className='search-label' htmlFor='search-input'>
            <input
              type='text'
              name='query'
              id={`search-input${search ? '-up' : '-down'}`}
              placeholder='Search...'
              onKeyDown={handleOnInputChange}
            />
            <i className='fa fa-search search-icon' aria-hidden='true' />
          </label>
        </div>
        <div className='login'>Log in</div>
      </div>

      {/*	Error Message*/}
      {message && <p className='message'>{message}</p>}

      {/*	Loader*/}
      <img
        src={Loader}
        className={`search-loading ${loading ? 'show' : 'hide'}`}
        alt='loader'
      />
      {/* Results or MoviePage */}
      {item === null ? showSearchResults() : showItem()}
    </div>
  );
};

export default Search;
