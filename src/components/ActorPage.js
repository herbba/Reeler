import React, { useState, useEffect } from 'react';
import nameService from '../services/names';
import { Link } from 'react-router-dom/';
import history from '../history';

const ActorPage = (props) => {
  const actorId = props.location.state.itemId;
  const [actor, setActor] = useState({});

  /* when actorIDd changes, gets actor's data */
  useEffect(() => {
    nameService.getName(actorId).then((res) => setActor(res));
  }, [actorId]);

  /* if actor has known titles, lists the links to them */
  const mapFilmo = () => {
    return actor.knownfortitles
      ? actor.knownfortitles.map((titleId) => (
          <li className='filmography' key={titleId}>
            {/* If link clicked, switch routes */}
            <Link
              className='filmography'
              to={{
                pathname: `/titles/${titleId}`,
                state: { itemId: titleId },
              }}
            >
              {titleId}
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
