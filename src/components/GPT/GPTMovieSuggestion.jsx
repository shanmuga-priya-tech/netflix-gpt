import { useSelector } from "react-redux";
import MovieList from "../browse/secondaryContainer/MovieList";

function GPTMovieSuggestion() {
  const gpt = useSelector((store) => store.GPT);
  const { genAIMovieNames, tmdbResults } = gpt;
  if (!genAIMovieNames) return null;

  return (
    <div className="p-4 m-4 text-white bg-black opacity-95">
      <div>
        {genAIMovieNames.map((moviename, i) => (
          <MovieList
            key={moviename}
            title={moviename}
            movies={tmdbResults[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default GPTMovieSuggestion;
