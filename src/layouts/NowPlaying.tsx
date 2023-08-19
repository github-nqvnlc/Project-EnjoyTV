import ResponsiveGrid from "../components/Grid";
import useFetch from "../hooks/useFetch";
import Heading from "../components/Heading";

// import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import SiderBar from "../components/siderBar/SiderBar";

const NowPlaying = () => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const [params] = useSearchParams();

  //   const page = params.get("page");

  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <Heading title="Popular Movies" />
      <div className="flex flex-row gap-5 justify-between items-start">
        <SiderBar />
        <div>
          <ResponsiveGrid data={data} loading={loading} error={error} />
          <div
            className="w-full flex flex-row justify-center items-center"
            onClick={() => {}}
          >
            <div className="w-40 bg-amber-500 p-5 my-5 text-center text-lg text-slate-200 font-bold rounded-sm cursor-pointer">
              See more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
