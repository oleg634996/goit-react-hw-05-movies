import { useParams,NavLink,Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { fetchMovieID } from "Api/Api";
import Button from "components/Button/button";

function MovieDetails() {
    const { moviesId } = useParams();
    const [detailMovie, setDetailMovie] = useState([]);

  const URL_Image = 'https://image.tmdb.org/t/p/w300';
  
    
     useEffect(() => {
     fetchMovieID(moviesId).then(setDetailMovie);
     }, [moviesId]);
   
    const { title, poster_path, overview, id } = detailMovie

  return (
    <>
      <Button/>
      <section className="move-detail">
        <div>
          <img src={`${URL_Image}${poster_path}`} alt="" />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>Описание фильма </h3>
          <p>{overview}</p>
          <h4>Жанры</h4>
        </div>
      </section>
      <NavLink to={`${id}/cast`}>cast</NavLink>
             <NavLink to={`${id}/reviews`}>reviews</NavLink>
             <Outlet/>
    </>
  );
}
export default MovieDetails




