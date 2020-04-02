/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../Search.css';
import Loader from '../loader.gif';
import PageNavigation from './PageNavigation';
import movieService from '../services/movies';
import cancelService from '../services/cancel';
import SearchResult from './SearchResult';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
      totalResults: 0,
      totalPages: 0,
      currentPageNo: 0
    };

    this.cancel = '';
  }

  /**
   * Get the Total Pages count.
   *
   * @param total
   * @param denominator Count of results per page
   * @return {number}
   */
  getPageCount = (total, denominator) => {
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
  fetchSearchResults = (updatedPageNo = '', query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
    //const searchUrl = `https://pixabay.com/api/?key=15763483-e44bd7d1a782b77b7b8429d3f&q=${query}${pageNumber}`;
    //const searchUrl = `/v1/search?q=${query}${pageNumber}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = cancelService.cancelToken;

    movieService
      .getMovie(query, pageNumber)
      .then(res => {
        const total = res.total;
        const totalPagesCount = this.getPageCount(total, 20);
        const resultNotFoundMsg = !res.hits.length ? 'ei oo mitään muuta' : '';
        this.setState({
          results: res.hits,
          message: resultNotFoundMsg,
          totalResults: total,
          totalPages: totalPagesCount,
          currentPageNo: updatedPageNo,
          loading: false
        });
      })
      .catch(error => {
        if (cancelService.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'EI LÖYTYNY DATAA'
          });
        }
      });
  };

  handleOnInputChange = event => {
    const query = event.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
        message: '',
        totalPages: 0,
        totalResults: 0
      });
    } else {
      this.setState({ query, loading: true, message: '' }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };

  /**
   * Fetch results according to the prev or next page requests.
   *
   * @param {String} type 'prev' or 'next'
   */
  handlePageClick = type => {
    //event.preventDefault();
    const updatePageNo =
      'prev' === type
        ? this.state.currentPageNo - 1
        : this.state.currentPageNo + 1;

    if (!this.state.loading) {
      this.setState({ loading: true, message: '' }, () => {
        this.fetchSearchResults(updatePageNo, this.state.query);
      });
    }
  };

  renderSearchResults = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return <SearchResult results={results} />;
    }
  };

  render() {
    const { query, loading, message, currentPageNo, totalPages } = this.state;

    const showPrevLink = 1 < currentPageNo;
    const showNextLink = totalPages > currentPageNo;

    return (
      <div className='container'>
        {/*	Heading*/}
        <h2 className='heading'>REELER</h2>
        {/* Search Input*/}
        <label className='search-label' htmlFor='search-input'>
          <input
            type='text'
            name='query'
            value={query}
            id='search-input'
            placeholder='Search...'
            onChange={this.handleOnInputChange}
          />
          <i className='fa fa-search search-icon' aria-hidden='true' />
        </label>

        {/*	Error Message*/}
        {message && <p className='message'>{message}</p>}

        {/*	Loader*/}
        <img
          src={Loader}
          className={`search-loading ${loading ? 'show' : 'hide'}`}
          alt='loader'
        />

        {/*Navigation*/}
        <PageNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={() => this.handlePageClick('prev')}
          handleNextClick={() => this.handlePageClick('next')}
        />

        {/*	Result*/}
        {this.renderSearchResults()}

        {/*Navigation*/}
        <PageNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={() => this.handlePageClick('prev')}
          handleNextClick={() => this.handlePageClick('next')}
        />
      </div>
    );
  }
}

export default Search;
