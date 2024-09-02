import { useSelector } from "react-redux";
import VideBackgorund from "./VideBackground";
import VideoTitle from "./videoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideBackgorund />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
}

export default MainContainer;
