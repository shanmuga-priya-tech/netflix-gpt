import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useFetchMovieData = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTION
      );
      const data = await res.json();

      dispatch(addNowPlayingMovies(data.results));
    };
    if (!nowPlayingMovies) {
      fetchData();
    }
  }, [dispatch, nowPlayingMovies]);
};

export default useFetchMovieData;
