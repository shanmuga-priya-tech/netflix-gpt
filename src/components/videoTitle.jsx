import { MORE_INFO, PLAY_ICON } from "../utils/constants";

function videoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-64 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-gray-200 flex gap-1 items-center px-12 rounded-md text-xl text-black   p-3 hover:bg-opacity-80 ">
          <img className="w-5" src={PLAY_ICON} alt="play-icon" />
          Play
        </button>
        <button className="bg-gray-200 flex gap-1 items-center px-8 rounded-md text-xl text-white p-3 bg-opacity-25 hover:bg-opacity-50 ">
          <img className="w-6 filter invert" src={MORE_INFO} alt="more-info" />
          More Info
        </button>
      </div>
    </div>
  );
}

export default videoTitle;
