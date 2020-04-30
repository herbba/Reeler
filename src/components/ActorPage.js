import React, { useState, useEffect } from 'react';
import ItemLink from './ItemLink.js';
import CreateLinks from './CreateLinks.js';
import mockUp from '../mockup.js';

const ActorPage = (props) => {
  const [actor, setActor] = useState({});
  const [mockupUsed, setMockupUsed] = useState(false)

  useEffect(() => {
    const mock = mockUp.getMockup(props.location.state.nconst)
    mock
      ? setActor(mock)
      : setActor(props.location.state);
    mock ? setMockupUsed(true) : setMockupUsed(false)
  }, [props.location.state]);

  /* if actor has known titles, lists the links to them */
  const mapFilmo = () => {
    return props.location.state.knownfortitles
      ? props.location.state.knownfortitles.map((t) => (
        <li className='filmographyListItem' key={t}>
          <ItemLink type="tt" baseUrl="/titles/" id={t} year={true} />
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

  const mapImages = () => {
    return actor.images ? (
      actor.images.map((img) => (
        <div className={`pageImagesColumn ${img}`} key={img}>
          <img
            className='pageImg'
            src={require(`../images/${img}.jpg`)}
            alt={img}
          ></img>
        </div>
      ))
    ) : (
        <div>images not found</div>
      );
  };

  return mockupUsed ? (
    <div className='pageContainer'>
      <div className='pageHeaderContainer'>
        <h1 className='pageHeader'>{actor.primaryname}</h1>
        <div className='pageImagesRow'>{mapImages()}</div>
        <p className='pageAbstract'><CreateLinks text={actor.abstract} /></p>
        <div className='pageAbstract'>
          <p>
            Born: {actor.birthday}
            {', '}
            {actor.birthyear ? actor.birthyear : 'unknown'}
            {' in '}
            {actor.birthplace}
          </p>
          <p>{actor.deathyear ? 'Died: ' + actor.deathyear : ''}</p>
          <p>Birth Name: {actor.birthname}</p>
        </div>
      </div>
      <div>
        <h2 className='pageSubHeader'>Filmography</h2>
        <ul className='filmography pageAbstract'>{mapFilmo()}</ul>
      </div>
      <div>
        <h2 className='pageSubHeader'>Full bio</h2>
        <p className='pageAbstract'><CreateLinks text={actor.fullbio} /></p>
      </div>
    </div>
  ) : (
      <div className='pageContainer'>
        {/*On click goes back to the previous page*/}
        {/* <p className='resultItem link' onClick={() => history.goBack()}>
        Back
      </p>
 */}
        <div className='pageHeaderContainer'>
          <h1 className='pageHeader'>{actor.primaryname}</h1>
          <p className='pageAbstract'>{styleProfession()}</p>
          <div className='pageAbstract'>
            <p>Born: {actor.birthyear ? actor.birthyear : 'unknown'}</p>
            <p>{actor.deathyear ? 'Died: ' + actor.deathyear : ''}</p>
          </div>
        </div>
        <div>
          <h2 className='pageSubHeader'>Filmography</h2>
          <ul>{mapFilmo()}</ul>
        </div>
      </div>
    );
};

export default ActorPage;
