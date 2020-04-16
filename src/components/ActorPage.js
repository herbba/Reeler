import React, { useState, useEffect } from 'react';
import nameService from '../services/names';
import titleService from '../services/titles';
import { Link } from 'react-router-dom/';

const ActorPage = (props) => {
  const actorId = props.match.params.id;
  const [actor, setActor] = useState({
    birthyear: null,
    deathyear: null,
    knownfortitles: [],
    nconst: '',
    primaryname: '',
    primaryprofession: '',
  });
  const [knownFor, setKnownFor] = useState([]);

  useEffect(() => {
    nameService.getName(actorId).then((res) => setActor(res));
  }, [actorId, actor.knownfortitles, knownFor]);

  const mapFilmo = () => {
    return actor.knownfortitles.map((titleId) => (
      <li className='filmography' key={titleId}>
        <Link className='filmography' to={`/titles/${titleId}`}>
          {titleId}
        </Link>
      </li>
    ));
  };

  return (
    <div className='movieContainer'>
      <div className='movieHeader'>
        <h1 className='paddedText'>{actor.primaryname}</h1>
        <p className='paddedText'>
          {actor.primaryprofession.replace(/,/g, ', ')}
        </p>
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
