import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import openai from "../utils/openAI";
import { API_OPTION } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

function GptSearchBar() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const searchtext = useRef(null);
  const selectedlang = useSelector((store) => store.config.lang);

  //search gpt result movie in tmdb
  const searchGptMovieTmdb = async (moviename) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${moviename}?include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const data = await res.json();
    return data.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      `act as a movie recommendation system and suggest some movies for the query` +
      searchtext?.current?.value +
      "only give me names of 5 movies,comma seperated.";

    //make an api call to gpt api  to get result
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      setError("No results found!..😥");
    }
    console.log(gptResults.choices?.[0]?.message?.content);

    const gptResultMovieNames =
      gptResults.choices?.[0]?.message?.content.split(",");

    //for each movieNames in results we get details of each movie in tmdb api
    const promiseArr = gptResultMovieNames.map((movie) =>
      searchGptMovieTmdb(movie)
    ); //[array of 5 promises]

    const tmdbResults = await Promise.all(promiseArr);
    dispatch(addGptMovies({ gptResultMovieNames, tmdbResults }));
  };

  return (
    <div>
      <div className="pt-[14%] flex justify-center">
        <form
          className=" w-1/2 grid grid-cols-12 bg-black"
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
            onClick={handleGPTSearchClick}
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
