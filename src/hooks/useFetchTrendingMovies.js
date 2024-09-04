import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrendingMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useFetchTrendingMovieData = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        API_OPTION
      );
      const data = await res.json();

      dispatch(addTrendingMovies(data.results));
    };
    if (!trendingMovies) {
      fetchData();
    }
  }, [dispatch, trendingMovies]);
};

export default useFetchTrendingMovieData;
