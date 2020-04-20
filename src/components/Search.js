/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import '../Search.css';
import Loader from '../loader.gif';
import Logo from '../images/logo.png';
import Menu from '../images/menu.png';
import Modal from './Modal';
import useModal from './useModal';
import history from '../history';
import { Link, Redirect } from 'react-router-dom';
import cancelService from '../services/cancel';
import searchService from '../services/searchResults';

const Search = (props) => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState(history.location.search ? true : false);
  const [cancel, setCancel] = useState('');
  const [query, setQuery] = useState(
    history.location.search
      ? decodeURI(history.location.search.substring(3))
      : ''
  );
  const [enter, setEnter] = useState(true);
  const { isShowing, toggle, register } = useModal();

  useEffect(() => {
    setSearch(
      history.location.pathname.includes('search') ||
        history.location.pathname.includes('titles') ||
        history.location.pathname.includes('names')
        ? true
        : false
    );
  }, []);

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
      if (query) {
        setSearch(true);
        setEnter(true);
      }
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
   * event handler for clicking on menu

   * TODO: correct functionality

   */
  const handleMenu = () => {
    setSearch(false);
    setResults({});
    setQuery('');
  };

  return (
    <div className='container'>
      {/*	Heading*/}
      <div className={`header${search ? '-up' : '-down'}`}>
        <div className={`header-left${search ? '-up' : '-down'}`}>
          <Link to='/'>
            <img
              className={`menu${search ? '' : ' hide'}`}
              src={Menu}
              alt='menu'
              onClick={handleMenu}
            />
          </Link>
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
                value={query}
                name='query'
                id={`search-input${search ? '-up' : '-down'}`}
                onChange={(event) => {
                  setEnter(false);
                  setQuery(event.target.value);
                  fetchSearchResults(event.target.value);
                }}
                onKeyDown={handleOnInputChange}
              />
              {/*TODO: Button search-function*/}
              <Link
                to={{
                  pathname: `/search?q=${query}`,
                  state: { results: results },
                }}
              >
                <button
                  id={`search-button${search ? '-up' : '-down'}`}
                  onClick={() => {
                    setSearch(true);
                  }}
                >
                  <i className='fa fa-search'></i>
                </button>
              </Link>
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
      {enter && results.length ? (
        <Redirect
          to={{
            pathname: `/search?q=${query}`,
            state: { results: results },
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Search;
