import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BANNER } from "../../utils/constants";

function GPTSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover "
          src={NETFLIX_BANNER}
          alt="netflix-banner"
        />
      </div>
      <div>
        <GptSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
}

export default GPTSearch;
