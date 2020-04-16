/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../Search.css';
import Loader from '../loader.gif';
import Logo from '../images/logo.png';
import Menu from '../images/menu.png';
import searchService from '../services/searchResults';
import cancelService from '../services/cancel';
import SearchResult from './SearchResult';
import Modal from './Modal';
import useModal from './useModal';

const Search = () => {
  //const [query, setQuery] = useState('');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [cancel, setCancel] = useState('');
  const [search, setSearch] = useState(false);

  const { isShowing, toggle, register } = useModal();
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

  const handleSearch = () => {
    const query = document.getElementById(
      `search-input${search ? '-up' : '-down'}`
    ).value;
    if (!query) {
      setResults({});
      setMessage('');
    } else {
      setLoading(true);
      setMessage('');
      setSearch(true);
      fetchSearchResults(1, query);
    }
  };

  /**
   * handle popup-toggling between register and login
   * @param {*} event default event when button is clicked
   */
  const handleToggle = (event) => {
    if (event.currentTarget.id === 'register') {
      toggle(true);
    } else {
      toggle(false);
    }
  };

  /**
   * Displays search results on the page
   */
  const showSearchResults = () => {
    if (Object.keys(results).length && results.length) {
      return (
        <>
          <SearchResult results={results} />;
        </>
      );
    }
  };

  /**
   * event handler for clicking on menu

   * TODO: correct functionality

   */
  const handleMenu = () => {
    setSearch(false);
    setResults({});
  };

  return (
    <div className='container'>
      {/*	Heading*/}
      <div className={`header${search ? '-up' : '-down'}`}>
        <div className={`header-left${search ? '-up' : '-down'}`}>
          <img
            className={`menu${search ? '' : ' hide'}`}
            src={Menu}
            alt='menu'
            onClick={handleMenu}
          />
        </div>
        <div className={`header-middle${search ? '-up' : '-down'}`}>
          <div className={`${search ? 'hide' : 'logo-text'}`}>
            <img className='logo' src={Logo} alt='Logo'></img>
            <p className='text'>Reel in the movies</p>
          </div>
          {/* Search Input */}
          <div className='search-bar'>
            <label className='search-label' htmlFor='search-input'>
              <input
                type='text'
                name='query'
                id={`search-input${search ? '-up' : '-down'}`}
                onKeyDown={handleOnInputChange}
              />
              {/*TODO: Button search-function*/}
              <button
                id={`search-button${search ? '-up' : '-down'}`}
                onClick={handleSearch}
              >
                <i className='fa fa-search'></i>
              </button>
            </label>
          </div>
        </div>

        <div className={`header-right${search ? '-up' : '-down'}`}>
          <button id='register' onClick={handleToggle}>
            Register
          </button>
          <button id='login' onClick={handleToggle}>
            Log in
          </button>
        </div>
      </div>

      {/*Pop-up*/}
      <Modal isShowing={isShowing} hide={toggle} register={register} />
      {/*	Error Message*/}
      {message && <p className='message'>{message}</p>}
      {/*	Loader*/}
      <img
        src={Loader}
        className={`search-loading ${loading ? 'show' : 'hide'}`}
        alt='loader'
      />
      {/* Results or MoviePage */}
      {showSearchResults()}
    </div>
  );
};

export default Search;
