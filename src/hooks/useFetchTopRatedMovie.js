import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTopRatedMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useFetchTopRatedMovieData = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTION
      );
      const data = await res.json();

      dispatch(addTopRatedMovies(data.results));
    };
    if (!topRatedMovies) {
      fetchData();
    }
  }, [dispatch, topRatedMovies]);
};

export default useFetchTopRatedMovieData;
