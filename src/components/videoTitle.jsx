import { PLAY_ICON } from "../utils/constants";

function videoTitle({ title, overview }) {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-gray-200 flex gap-1 items-center px-12 rounded-md text-xl text-black font-bold  p-4 ">
          <img className="w-6" src={PLAY_ICON} alt="play-icon" />
          Play
        </button>
        <button className="bg-gray-200  items-center px-12 rounded-md text-xl text-black font-bold  p-4 ">
          More Info
        </button>
      </div>
    </div>
  );
}

export default videoTitle;
