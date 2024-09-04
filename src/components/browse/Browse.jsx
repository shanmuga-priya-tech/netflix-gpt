import { useSelector } from "react-redux";
import useFetchMovieData from "../../hooks/useFetchMovie";
import useFetchPopularMovieData from "../../hooks/useFetchPopularMovie";
import useFetchTopRatedMovieData from "../../hooks/useFetchTopRatedMovie";
import useFetchTrendingMovieData from "../../hooks/useFetchTrendingMovies";
import useFetchUpcomingMovieData from "../../hooks/useFetchUpcomigMovies";
import GPTSearch from "../GPT/GPTSearch";
import Header from "../Header";
import MainContainer from "./mainContainer/MainContainer";
import SecondaryContainer from "./secondaryContainer/SecondaryContainer";

function Browse() {
  const showGpt = useSelector((store) => store.GPT.showGptSearch);
  useFetchMovieData();
  useFetchPopularMovieData();
  useFetchTopRatedMovieData();
  useFetchUpcomingMovieData();
  useFetchTrendingMovieData();
  return (
    <div>
      <Header />
      {showGpt ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
