import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="px-6 mb-10">
      <h1 className="text-white  text-3xl  pb-4">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
