import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Form from 'components/Form/Form';
import { fetchMovieSearch } from 'Api/Api';

const URL_Image = 'https://image.tmdb.org/t/p/w300';

const Movies = () => {
  const [inputText, setInputText] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const onSubmit = event => {
    setInputText(event);
  };

  useEffect(() => {
    if (inputText === '') {
      return;
    }
    fetchMovieSearch(inputText).then(setSearchMovies);
  }, [inputText]);

  return (
    <div>
      <Form onSubmit={onSubmit} />
      <ul className="nav-item">
        {searchMovies.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img src={`${URL_Image}${poster_path}`} alt={title} />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
