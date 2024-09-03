import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

function GptSearchBar() {
  const selectedlang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[14%] flex justify-center">
      <form className=" w-1/2 grid grid-cols-12 bg-black">
        <input
          type="text"
          placeholder={lang[selectedlang].searchPlaceholder}
          className="p-4 m-4  col-span-9"
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-600 rounded-lg text-white">
          {lang[selectedlang].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
