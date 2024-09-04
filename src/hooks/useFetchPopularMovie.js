import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addPopularMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useFetchPopularMovieData = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTION
      );
      const data = await res.json();

      dispatch(addPopularMovies(data.results));
    };
    if (!popularMovies) {
      fetchData();
    }
  }, []);
};

export default useFetchPopularMovieData;
