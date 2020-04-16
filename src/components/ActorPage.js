import React, { useState } from 'react';

const ActorPage = ({ act, onItemClick }) => {
  const mapFilmo = () => {
    return act.knownfortitles.map((titleId) => (
      <li className='filmography' key={titleId}>
        {titleId}
      </li>
    ));
  };

  return (
    <div className='movieContainer'>
      <div className='movieHeader'>
        <h1 className='paddedText'>{act.primaryname}</h1>
        <p className='paddedText'>
          {act.primaryprofession.replace(/,/g, ', ')}
        </p>
        <div className='paddedText'>
          <p>Born: {act.birthyear ? act.birthyear : 'unknown'}</p>
          <p>{act.deathyear ? 'Died: ' + act.deathyear : ''}</p>
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
