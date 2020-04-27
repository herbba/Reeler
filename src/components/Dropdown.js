import React, { useState } from 'react';
import home from '../images/home.png'
import favs from '../images/favs.png'
import top from '../images/top.png'
import recommended from '../images/recommended.png'
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    function handleHome(){
        props.handleReturn();
      }

    return(
        <div className='sidebar'>
            <Link to='/'>
                <div className='sidebar-item'
                onClick={handleHome}>
                <img className='sidebar-icon' src={home} alt='home'></img>
                <div className='sidebar-text'>Home</div>
                </div>
            </Link>
            <div className='sidebar-item'>
                <img className='sidebar-icon' src={favs} alt='favs'></img>
                <div className='sidebar-text'>Favourites</div>
            </div>
            <div className='sidebar-item'>
                <img className='sidebar-icon' src={top} alt='top'></img>
                <div className='sidebar-text'>Top 10</div>
            </div>
            <div className='sidebar-item'>
                <img className='sidebar-icon' src={recommended} alt='recommended'></img>
                <div className='sidebar-text'>Recommended</div>
            </div>
        </div>
    )
}

export default Dropdown;
