/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import '../Search.css';
import Loader from '../loader.gif';
import Logo from '../images/logo.png';
import LogoSmall from '../images/logo-small.png';
import Modal from './Modal';
import useModal from './useModal';
import history from '../history';
import { Link, Redirect } from 'react-router-dom';
import cancelService from '../services/cancel';
import searchService from '../services/searchResults';
import Dropdown from './Dropdown';

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
  const [isOpen, toggleIsOpen] = useState(false);
  /**
   * on component mount, if url has search, title or name in it,
   * show the search bar on top
   */
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
  const fetchSearchResults = (q) => {
    //const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';

    if (cancel) {
      cancel.cancel();
    }

    setCancel(cancelService.cancelToken);

    q === "mockup" ?
      showMockups() :
      searchService
        .getResults(q)
        .then((res) => {
          const resultNotFoundMsg = !res.results.length
            ? 'ei oo mitään muuta'
            : '';
          setResults(res.results);
          setMessage(resultNotFoundMsg);
          setLoading(false);
          setEnter(true);
        })
        .catch((error) => {
          if (cancelService.isCancel(error) || error) {
            setLoading(false);
            setMessage('EI LÖYTYNY DATAA');
          }
        });
  };

  const showMockups = () => {
    const mockupIds = ["nm0000474", "tt2562232", "tt0094721", "tt4276820", "tt0120338", "tt0096895", "nm0000197", "nm0000107", "nm0000138", "tt0407887", "nm0000701"]
    setResults(mockupIds);
    setMessage("")
    setLoading(false);
    setEnter(true);
  };

  /**
   * When enter is pressed search bar to the top and
   * enter sets to true
   * @param {*} event default event on input change
   */
  const handleOnInputChange = (event, q) => {
    if (event.keyCode === '13' || event.key === 'Enter') {
      handleSearch(q);
    }
  };

  /** Shows loading-indicator
   * sets the search bar on top
   * fetches search results
   * switches router to searchresults */
  const handleSearch = (q) => {
    if (q && q.length > 3) {
      setLoading(true);
      setSearch(true);
      fetchSearchResults(q);
      //setEnter(true);
    } else {
      setMessage('Search query should be at least 4 digits long');
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
   * Return to homepage, reset states
   */
  const handleReturn = () => {
    setResults({});
    setLoading(false);
    setMessage('');
    setSearch(history.location.search ? true : false);
    setCancel('');
    setQuery(
      history.location.search
        ? decodeURI(history.location.search.substring(3))
        : ''
    );
    toggleIsOpen(false);
    setEnter(true);
  };

  /**
   * Toggle isOpen from Dropdown/menu
   */
  const handleMenu = () => {
    toggleIsOpen(!isOpen);
  }

  return (
    <div className='container'>
      {/*	Heading*/}
      <div className={`header${search ? '-up' : '-down'}`}>
        {/* Header left */}
        <div className={`header-left${search ? '-up' : '-down'}`}>
          <div>
            <div className='menu' onClick={handleMenu}>
              <div className='menu-icon'></div>
              <div className='menu-icon'></div>
              <div className='menu-icon'></div>
            </div>
            {isOpen ? <Dropdown handleReturn={handleReturn} /> : <></>}
          </div>
          {/* Header logo + text */}
          <Link className='bar-link' to='/'>
            <div onClick={handleReturn} className={`header-logo-text${search ? '' : ' hide'}`}>
              <img src={LogoSmall} className='header-logo-small' alt="reeler logo"></img>
              <div>
                <div className='header-logo-label'>ReelGeek</div>
                <div className='header-logo-motto'>Reel in the movies</div>
              </div>
            </div>
          </Link>
        </div>
        {/* Header middle */}
        <div className={`header-middle${search ? '-up' : '-down'}`}>
          <div className={`${search ? 'hide' : 'logo-text'}`}>
            <img className='logo' src={Logo} alt='Logo' />
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
                  setMessage('');
                  setEnter(false);
                  setQuery(event.target.value);
                }}
                onKeyDown={(e) => handleOnInputChange(e, query)}
              />
              {/*On button click switch router*/}
              <button
                id={`search-button${search ? '-up' : '-down'}`}
                onClick={() => {
                  handleSearch(query);
                }}
              >
                <i className='fa fa-search'></i>
              </button>
            </label>
          </div>
        </div>
        {/* Header right */}
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
      {message && (
        <p className={`message${search ? '-up' : '-down'}`}>{message}</p>
      )}
      {/*	Loader*/}
      <img
        src={Loader}
        className={`search-loading ${loading ? 'show' : 'hide'}`}
        alt='loader'
      />
      {/* if enter is pressed and there is results, switch router */}
      {enter && results.length ? (
        <Redirect
          to={{
            pathname: `/search?q=${query}`,
            state: { results: results, visibility: 4 },
          }}
        />
      ) : (
          <></>
        )}
    </div>
  );
};
export default Search;
