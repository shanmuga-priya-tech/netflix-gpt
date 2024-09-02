import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

function VideBackground({ movieID }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideo = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos`,
        API_OPTION
      );
      const data = await res.json();

      const filteredTrailers = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredTrailers.length
        ? filteredTrailers[1]
        : data.results[0];

      //adding the trailer video into a store and getting it back again from store for id instead of creating a state var
      dispatch(addTrailerVideo(trailer));
    };
    getMovieVideo();
  }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideBackground;
