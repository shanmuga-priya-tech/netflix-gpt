import { IMG_URL } from "../utils/constants";

function MovieCard({ movie }) {
  console.log(movie);
  const { poster_path } = movie;
  return (
    <div className="w-48 pr-4">
      <img src={`${IMG_URL}${poster_path}`} alt="movie-poster" />
    </div>
  );
}

export default MovieCard;
