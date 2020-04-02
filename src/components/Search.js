/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../Search.css';
import Loader from '../loader.gif';
import Logo from '../images/logo.png';
import Menu from '../images/menu.png';
import PageNavigation from './PageNavigation';
import movieService from '../services/movies';
import cancelService from '../services/cancel';
import SearchResult from './SearchResult';
import MoviePage from './MoviePage';
import ActorPage from './ActorPage';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageNo, setCurrentPageNo] = useState(0);
  const [item, setItem] = useState(null);
  const [itemIsMovie, setItemIsMovie] = useState(true);
  const [cancel, setCancel] = useState('');
  const [search, setSearch] = useState(false);

  /**
   * Get the Total Pages count.
   *
   * @param total
   * @param denominator Count of results per page
   * @return {number}
   */
  const getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  /**
   * Fetch the search results and update the state with the result.
   * Also cancels the previous query before making the new one.
   *
   * @param {int} updatedPageNo Updated Page No.
   * @param {String} query Search Query.
   *
   */
  const fetchSearchResults = (updatedPageNo = '', query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
    console.log('pagenumber', pageNumber);
    //const searchUrl = `https://pixabay.com/api/?key=15763483-e44bd7d1a782b77b7b8429d3f&q=${query}${pageNumber}`;
    //const searchUrl = `/v1/search?q=${query}${pageNumber}`;

    if (cancel) {
      console.log('cancel', cancel);
      cancel.cancel();
    }

    setCancel(cancelService.cancelToken);
    console.log('cancel', cancel);

    movieService
      .getMovie(query, pageNumber)
      .then(res => {
        const total = res.total;
        console.log('total', total);
        const totalPagesCount = getPageCount(total, 20);
        console.log('totalPagesCount', totalPagesCount);
        const resultNotFoundMsg = !res.hits.length ? 'ei oo mitään muuta' : '';
        console.log('resultsNotFoundMsg', resultNotFoundMsg);
        console.log('res.hits', res.hits);
        setResults(res.hits);
        console.log('setresults', results);
        setMessage(resultNotFoundMsg);
        console.log('setmessage', message);
        setTotalResults(total);
        console.log('setTotals', totalResults);
        setTotalPages(totalPagesCount);
        console.log('settotalPages', totalPages);
        setCurrentPageNo(updatedPageNo);
        console.log('setCurrentPageno', currentPageNo);
        setLoading(false);
        console.log('setLoading', loading);
      })
      .catch(error => {
        console.log('Catch', error);
        if (cancelService.isCancel(error) || error) {
          setLoading(false);
          setMessage('EI LÖYTYNY DATAA');
        }
      });
  };

  const handleOnInputChange = event => {
    if (event.keyCode === 13) {
      const query = event.target.value;

      console.log(query);
      if (!query) {
        console.log('!query');
        setResults({});
        setMessage('');
        setTotalPages(0);
        setTotalResults(0);
      } else {
        console.log('query');
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
  const handlePageClick = type => {
    //event.preventDefault();
    const updatePageNo =
      'prev' === type
        ? setCurrentPageNo(currentPageNo - 1)
        : setCurrentPageNo(currentPageNo + 1);

    if (!loading) {
      setLoading(true);
      setMessage('');
      fetchSearchResults(updatePageNo, query);
    }
  };

  const showItem = () => {
    console.log('item', item);
    if (itemIsMovie === true) {
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

  const itemUpdate = (item, isMovie, e) => {
    e.preventDefault();
    setItem(item);
    setItemIsMovie(isMovie);
  };

  const showSearchResults = () => {
    if (Object.keys(results).length && results.length) {
      return (
        <>
          <PageNavigation
            loading={loading}
            showPrevLink={showPrevLink}
            showNextLink={showNextLink}
            handlePrevClick={() => handlePageClick('prev')}
            handleNextClick={() => handlePageClick('next')}
          />
          <SearchResult results={results} onItemClick={itemUpdate} />;
          <PageNavigation
            loading={loading}
            showPrevLink={showPrevLink}
            showNextLink={showNextLink}
            handlePrevClick={() => handlePageClick('prev')}
            handleNextClick={() => handlePageClick('next')}
          />
        </>
      );
    }
  };

  const handleMenu = () => {
    setSearch(false);
    setResults({});
  };

  const showPrevLink = 1 < currentPageNo;
  const showNextLink = totalPages > currentPageNo;

  return (
    <div className='container'>
      <div className='palkki'></div>
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
      {item === null ? showSearchResults() : showItem()}
    </div>
  );
};

export default Search;
