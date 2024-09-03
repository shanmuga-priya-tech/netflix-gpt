import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";

function GptSearchBar() {
  const searchtext = useRef(null);
  const selectedlang = useSelector((store) => store.config.lang);

  const gptQuery =
    `act as a movie recommendation system and suggest some movies for the query` +
    searchtext.current.value +
    "only give me names of 7 movies,comma seperated.";

  const handleGPTSearchClick = async () => {
    //make an api call to gpt api  to get result
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
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
  );
}

export default GptSearchBar;
