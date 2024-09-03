import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchPopularMovieData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTION
      );
      const data = await res.json();

      dispatch(addPopularMovies(data.results));
    };
    fetchData();
  }, [dispatch]);
};

export default useFetchPopularMovieData;
