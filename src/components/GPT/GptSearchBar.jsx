import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTION } from "../../utils/constants";
import { addGenAIMovies } from "../../utils/store/gptSlice";

function GptSearchBar() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const searchtext = useRef(null);
  const selectedlang = useSelector((store) => store.config.lang);

  //search gpt result movie in tmdb
  const searchGenAIMovieTmdb = async (moviename) => {
    console.log(moviename);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${moviename}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const data = await res.json();

    return data.results;
  };

  const handleGenAISearchClick = async () => {
    const genAIQuery =
      `act as a movie recommendation system and suggest some movies for the query` +
      searchtext?.current?.value +
      "only give me names of 5 movies,comma seperated.";

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const genAIresults = await model.generateContent(genAIQuery);
    if (!genAIresults) {
      setError("No results found!..😥");
    }

    const genAIResultMovieNames =
      genAIresults?.response.candidates?.[0].content.parts?.[0].text.split(
        ", "
      );

    //for each movieNames in results we get details of each movie in tmdb api
    const promiseArr = genAIResultMovieNames.map((movie) =>
      searchGenAIMovieTmdb(movie)
    ); //[array of 5 promises]

    const tmdbResults = await Promise.all(promiseArr);
    dispatch(addGenAIMovies({ genAIResultMovieNames, tmdbResults }));
    searchtext.current.value = null;
  };

  return (
    <div>
      <div className="pt-[40%] md:pt-[14%] flex justify-center">
        <form
          className="w-full md:w-1/2 grid grid-cols-12 bg-black"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            ref={searchtext}
            placeholder={lang[selectedlang].searchPlaceholder}
            className="p-4 m-4  col-span-9"
          />
          <button
            className="py-2 px-4 col-span-3 m-4 bg-red-600 rounded-lg text-white"
            onClick={handleGenAISearchClick}
          >
            {lang[selectedlang].search}
          </button>
        </form>
      </div>
      {error && (
        <div className="flex justify-center">
          <h1 className="text-white w-[15%] flex justify-center  text-xl p-2 rounded-lg bg-red-600 opacity-90 m-2 font-3xl ">
            {error}
          </h1>
        </div>
      )}
    </div>
  );
}

export default GptSearchBar;
