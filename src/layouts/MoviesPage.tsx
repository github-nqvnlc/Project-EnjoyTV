import ResponsiveGrid from "../components/Grid";
import useFetch from "../hooks/useFetch";
import Heading from "../components/Heading";

// import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import SiderBar from "../components/siderBar/SiderBar";

interface MoviesPageProps {
  url: string;
  title: string;
}

const MoviesPage: React.FC<MoviesPageProps> = ({ url, title }) => {
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <Heading magrin={5} title={title} />
      <div className="flex flex-row gap-5 justify-between items-start">
        <SiderBar />
        <div>
          <ResponsiveGrid data={data} loading={loading} error={error} page />
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

export default MoviesPage;
