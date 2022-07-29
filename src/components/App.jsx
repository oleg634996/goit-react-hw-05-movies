import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Nav } from './Nav/Nav';

const Home = lazy(() => import('./Home/Home') /*webpackChunkName:'Home'*/);
const Movies = lazy(
  () => import('./Movies/Movies') /*webpackChunkName:'Movies'*/
);
const Cast = lazy(() => import('./Cast/Cast') /*webpackChunkName:'Cast'*/);
const Reviews = lazy(
  () => import('./Reviews/Reviews') /*webpackChunkName:'Reviews'*/
);
const MovieDetails = lazy(
  () =>
    import('./MovieDetails/MovieDetails') /*webpackChunkName:'MovieDetails'*/
);

export function App() {
  return (
    <div>
      <Nav />
      <Suspense fallback={<p>laoding</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path=":moviesId/cast" element={<Cast />} />
            <Route path=":moviesId/reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={'<NoMatch />'} />
        </Routes>
      </Suspense>
    </div>
  );
}
