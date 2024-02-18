import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
    const { id } = useParams();
    console.log(id);

    const { isLoading, movie } = useFetch(`&i=${id}`);

    if (isLoading) {
        return (
        <section className="movie-section ">
            <div className="loading">Loading....</div>;
        </section>
        );
    }

    return (
        <section className="movie-section">
        <div className="movie-card">
            <figure>
            <img src={movie.Poster} alt="" />
            </figure>
            <div className="card-content text-center">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/home" className="back-btn">
                Go Back
            </NavLink>
            </div>
        </div>
        </section>
    );
};

export default SingleMovie;