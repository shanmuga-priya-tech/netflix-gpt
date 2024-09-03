import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

function VideoBackground({ movieID }) {
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
        (video) => video.type === "Trailer" && video.name === "Official Trailer"
      );

      const trailer = filteredTrailers.length
        ? filteredTrailers[0]
        : data.results[0];

      dispatch(addTrailerVideo(trailer));
    };

    getMovieVideo();
  }, [movieID, dispatch]);

  return (
    <div className="relative w-full h-screen overflow-hidden -z-10">
      <iframe
        className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
