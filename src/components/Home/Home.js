import { fetchTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const URL_Image = 'https://image.tmdb.org/t/p/w300';

function Home() {
  const [tredingMovie, setTredingMovie] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTredingMovie);
  }, []);
  console.log(tredingMovie, 'oleg');

  return (
    <main className="main">
      <ul className="nav-item ">
        {tredingMovie.map(trend => {
          return (
            <li key={trend.id}>
              <Link to={`movies/${trend.id}`}>
                <img
                  src={`${URL_Image}${trend.poster_path}`}
                  alt={trend.title}
                />
                <p>{trend.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Home;
