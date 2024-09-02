import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

function VideBackground({ movieID }) {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

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
      console.log(trailer);
      //adding the trailer video into a store and getting it back again from store for id instead of creating a state var
      dispatch(addTrailerVideo(trailer));
    };
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideBackground;
