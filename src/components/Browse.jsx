import { useEffect } from "react";
import Header from "./Header";
import { API_OPTION } from "../utils/constants";

function Browse() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTION
      );
      const data = await res.json();
      console.log(data.results);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default Browse;
