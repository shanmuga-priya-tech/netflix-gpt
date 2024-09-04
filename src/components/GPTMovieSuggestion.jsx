import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GPTMovieSuggestion() {
  const gpt = useSelector((store) => store.GPT);
  const { gptMovieNames, tmdbResults } = gpt;
  if (!gptMovieNames) return null;

  return (
    <div className="p-4 m-4 text-white bg-black opacity-90">
      <div>
        {gptMovieNames.map((moviename, i) => (
          <MovieList
            key={moviename}
            title={moviename}
            movies={tmdbResults[i]}
          />
        ))}
        <h1>{gptMovieNames[0]}</h1>
      </div>
    </div>
  );
}

export default GPTMovieSuggestion;
