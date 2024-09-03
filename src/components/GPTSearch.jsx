import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BANNER } from "../utils/constants";

function GPTSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NETFLIX_BANNER} alt="netflix-banner" />
      </div>
      <GptSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
}

export default GPTSearch;
