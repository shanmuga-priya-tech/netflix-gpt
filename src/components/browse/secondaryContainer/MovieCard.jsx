import { IMG_URL } from "../../../utils/constants";

function MovieCard({ movie }) {
  const { poster_path } = movie;
  if (!poster_path) return null;
  return (
    <div className=" w-36 md:w-48 pr-4">
      <img src={`${IMG_URL}${poster_path}`} alt="movie-poster" />
    </div>
  );
}

export default MovieCard;
