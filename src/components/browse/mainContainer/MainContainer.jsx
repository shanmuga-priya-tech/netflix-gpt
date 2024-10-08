import { useSelector } from "react-redux";
import VideBackgorund from "./VideBackground";
import VideoTitle from "./videoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  //console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideBackgorund movieID={id} />
    </div>
  );
}

export default MainContainer;
