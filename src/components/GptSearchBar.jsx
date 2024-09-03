function GptSearchBar() {
  return (
    <div className="pt-[14%] flex justify-center">
      <form className=" w-1/2 grid grid-cols-12 bg-black">
        <input
          type="text"
          placeholder="what would you like to watch today ?"
          className="p-4 m-4  col-span-9"
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-600 rounded-lg text-white">
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
