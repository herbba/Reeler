import React, { useState, useEffect } from 'react';
import nameService from '../services/names';
import { Link } from 'react-router-dom/';
import history from '../history';

/* TODO */
/* When using the browser's back-button, url changes but the view doesn't, same in actorPage.js */

const ActorPage = (props) => {
  const actorId = props.location.state.itemId;
  const [actor, setActor] = useState({});

  useEffect(() => {
    nameService.getName(actorId).then((res) => setActor(res));
  }, [actorId]);

  const mapFilmo = () => {
    return actor.knownfortitles
      ? actor.knownfortitles.map((titleId) => (
          <li className='filmography' key={titleId}>
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

  const styleProfession = () => {
    return actor.primaryprofession
      ? actor.primaryprofession.replace(/,/g, ', ')
      : '';
  };

  return (
    <div className='movieContainer'>
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
