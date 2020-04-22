import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom/';
import history from '../history';
import axios from 'axios';
import titleService from '../services/titles';

const ActorPage = (props) => {
  const [actor, setActor] = useState({});
  const [titles, setTitles] = useState([]);

/* const knownForIds = props.location.state.results
    ? props.location.state.results.filter((item) => item.includes('tt'))
    : {}; */
    
  /* when location.props.state is changed, sets the state to actors and
  * gets the data for knownfor titles
   */
  useEffect(() => {
    setActor(props.location.state);
    const requests = props.location.state.knownfortitles.map(id => titleService.getTitle(id)) 
    axios.all(requests).then(axios.spread((...responses) => setTitles(responses)))

  }, [props.location.state]);


  /* if actor has known titles, lists the links to them */
  const mapFilmo = () => {
    return titles
      ? titles.map((t) => (
          <li className='filmography' key={t.tconst}>
            {/* If link clicked, switch routes */}
            <Link
              className='filmography'
              to={{
                pathname: `/titles/${t.tconst}`,
                state: { itemId: t.tconst },
              }}
            >
              {t.primarytitle}
            </Link>
          </li>
        ))
      : '';
  };

  /* if actor has professions, adds spaces bewteen the commas */
  const styleProfession = () => {
    return actor.primaryprofession
      ? actor.primaryprofession.replace(/,/g, ', ')
      : '';
  };

  return (
    <div className='movieContainer'>
      {/*On click goes back to the previous page*/}
      <p className='resultItem link' onClick={() => history.goBack()}>
        Back
      </p>

      <div className='movieHeader'>
        <h1 className='paddedText'>{actor.primaryname}</h1>
        <p className='paddedText'>{styleProfession()}</p>
        <div className='paddedText'>
          <p>Born: {actor.birthyear ? actor.birthyear : 'unknown'}</p>
          <p>{actor.deathyear ? 'Died: ' + actor.deathyear : ''}</p>
        </div>
      </div>
      <div>
        <h2 className='paddedText'>Filmography</h2>
        <ul>{mapFilmo()}</ul>
      </div>
    </div>
  );
};

export default ActorPage;
