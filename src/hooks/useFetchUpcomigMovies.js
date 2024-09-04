import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchUpcomingMovieData = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTION
      );
      const data = await res.json();

      dispatch(addUpcomingMovies(data.results));
    };
    if (!upcomingMovies) {
      fetchData();
    }
  }, [dispatch, upcomingMovies]);
};

export default useFetchUpcomingMovieData;
