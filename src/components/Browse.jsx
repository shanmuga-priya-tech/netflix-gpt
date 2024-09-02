import useFetchMovieData from "../hooks/useFetchMovie";
import Header from "./Header";

function Browse() {
  const data = useFetchMovieData();
  return (
    <div>
      <Header />
    </div>
  );
}

export default Browse;
