import { MORE_INFO, PLAY_ICON } from "../../../utils/constants";

function videoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 flex ">
        <button className="flex items-center gap-1 bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80 ">
          <img className="w-5" src={PLAY_ICON} alt="play-icon" />
          Play
        </button>

        <div className="hidden md:inline-block">
          <button className="flex mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ">
            <img
              className="w-6 filter invert"
              src={MORE_INFO}
              alt="more-info"
            />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default videoTitle;
