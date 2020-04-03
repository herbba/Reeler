import React from 'react';

const MoviePage = ({ mov }) => {
  /*  const mov = {
    id: 12345,
    titleType: 'title type',
    primaryTitle: 'MOVIE 1',
    originalTitle: 'original title',
    isAdult: true,
    startYear: 2017,
    endYear: null,
    runtimeMinutes: 190,
    genres: ['genre1', 'genre2']
  }; */

  const renderCast = () => {
    const cast = [
      { id: 1, name: 'Actor 1', role: 'role 1' },
      { id: 2, name: 'Actor 2', role: 'role 3' },
      { id: 3, name: 'Actor 3', role: 'role 3' }
    ];

    return cast.map(castMember => (
      <p key={castMember.id}>
        {castMember.name} - {castMember.role}
      </p>
    ));
  };

  return (
    <div>
      <div className='movieHeader'>
        <h2>{mov.primaryTitle}</h2>
        {mov.endYear ? (
          <h3>
            {mov.startYear} - {mov.endYear}
          </h3>
        ) : (
          <h3>{mov.startYear}</h3>
        )}
        <div className='movieInfo'>
          {mov.runTimeMinutes} min | {mov.genres} | julkaisupäivä ja maa
        </div>
      </div>
      <div className='movieImages'>
        <div>image 1</div>
        <div>image 2</div>
        <div>image 3</div>
      </div>
      <div className='movieAbstract'>
        <p>
          This movie is a movie. And it is a movie and it is very funny lol.
        </p>
        <p>director: </p>
        <p>writers:</p>
        <p>stars:</p>
      </div>
      <div className='movieCast'>
        <h3>Cast</h3>
        {renderCast()}
      </div>
      <div className='movieStoryline'>
        <h3>Storyline</h3> This is the storyline
      </div>
    </div>
  );
};

export default MoviePage;
