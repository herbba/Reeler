import React, { useState } from 'react';
import home from '../images/home.png'
import favs from '../images/favs.png'
import top from '../images/top.png'
import recommended from '../images/recommended.png'
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const [favItems, setFavs] = useState(false);
    const [topItems, setTop] = useState(false);
    const [recItems, setRec] = useState(false);

    /**
     * mockup data for drop menus
     */
    const recMovies = ['It (2017', 'Parasite (2019)', 'Avengers: Endgame (2019)', '1917 (2019)'];
    const topMovies = ['The Shawshank Redemption (1994)', 'The Godfather (1972)', 'The Godfather: Part II (1974)', 'The Dark Knight (2008)', '12 Angry Men (1957)',
    'Schindler\'s List (1993)', 'The Lord of the Rings: The Return of the King (2003)', ' Pulp Fiction (1994)', 'The Good, the Bad and the Ugly (1966)', 'Fight Club (1999)'];
    const favMovies = ['The Shawshank Redemption (1994)', 'The Godfather (1972)', 'The Godfather: Part II (1974)', 'The Dark Knight (2008)', '12 Angry Men (1957)'];

    function mockupdata(data, image) {
    const list = data.map((d) => (<li className='sidebar-label' key={d}>{image ? '🖒 ' + d: '☆ ' + d}</li>));
        return (
            <ul className = 'sidebar-ul'>
                {list}
            </ul>
        )
    }

    function handleHome(){
        props.handleReturn();
      }

      function handleFavourites() {
        setFavs(!favItems);
      }

      function handleTop() {
        setTop(!topItems);
      }

      function handleRecommended() {
        setRec(!recItems);
      }

    return(
        <div className='sidebar'>
            <Link className='bar-link' to='/'>
                <div className='sidebar-item'
                onClick={handleHome}>
                <img className='sidebar-icon' src={home} alt='home'></img>
                <div className='sidebar-text'>Home</div>
                </div>
            </Link>
            <div className='sidebar-item'
            onClick={handleFavourites}>
                <img className='sidebar-icon' src={favs} alt='favs'></img>
                <div className='sidebar-text'>Favourites</div>
            </div>
            <div className={`sidebar-list${favItems ? '' : ' hide'}`}>
                {mockupdata(favMovies, false)}
            </div>
            <div className='sidebar-item'
            onClick={handleTop}>
                <img className='sidebar-icon' src={top} alt='top'></img>
                <div className='sidebar-text'>Top 10</div>
            </div>
            <div className={`sidebar-list${topItems ? '' : ' hide'}`}>
                {mockupdata(topMovies, false)}
            </div>
            <div className='sidebar-item'
            onClick={handleRecommended}>
                <img className='sidebar-icon' src={recommended} alt='recommended'></img>
                <div className='sidebar-text'>Recommended</div>
            </div>
            <div className={`sidebar-list${recItems ? '' : ' hide'}`}>
                {mockupdata(recMovies, true)}
            </div>
        </div>
    )
}

export default Dropdown;
