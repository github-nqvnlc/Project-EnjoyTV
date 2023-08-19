import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Slide from "../components/Slide";
import useFetch from "../hooks/useFetch";
import imgBanner from "./../assets/home-background.png";
import { useNavigate } from "react-router-dom";

const NowPlayingSlider = () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;

  const { data, loading, error } = useFetch(url);
  return (
    <div>
      <Slide data={data} loading={loading} error={error} time={300} />
    </div>
  );
};

const UpCommingSlider = () => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const { data, loading, error } = useFetch(url);
  return (
    <div>
      <Slide data={data} loading={loading} error={error} time={300} />
    </div>
  );
};

const TopRateSlider = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const { data, loading, error } = useFetch(url);
  return (
    <div>
      <Slide data={data} loading={loading} error={error} time={300} />
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const urlPopularMovies =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const { data, loading, error } = useFetch(urlPopularMovies);
  return (
    <>
      <Banner
        title="Hitman's Wife's Bodyguard"
        subtitle="Releasing 23 july"
        imageUrl={imgBanner}
      />
      <Heading title="Popular Movies" onClick={() => navigate("/popular")} />
      <Slide data={data} loading={loading} error={error} time={300} />
      <Heading title="Now playing" onClick={() => navigate("/now_playing")} />
      <NowPlayingSlider />
      <Heading title="Up comming" />
      <UpCommingSlider />
      <Heading title="Top Rated" />
      <TopRateSlider />
    </>
  );
};

export default HomePage;
