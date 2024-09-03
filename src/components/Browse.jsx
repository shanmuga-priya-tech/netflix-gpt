import useFetchMovieData from "../hooks/useFetchMovie";
import useFetchPopularMovieData from "../hooks/useFetchPopularMovie";
import useFetchTopRatedMovieData from "../hooks/useFetchTopRatedMovie";
import useFetchUpcomingMovieData from "../hooks/useFetchUpcomigMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useFetchMovieData();
  useFetchPopularMovieData();
  useFetchTopRatedMovieData();
  useFetchUpcomingMovieData();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
