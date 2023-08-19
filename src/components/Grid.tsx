import React from "react";
import { ApiResponse } from "../hooks/useFetch";
import CardMovies from "./movies/CardMovies";
import Loader from "./Loader";

interface ResponsiveGridProps {
  data: ApiResponse | null;
  loading: boolean;
  error: string | null;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  data,
  loading,
  error,
}) => {
  const thumb = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

  if (loading) {
    return (
      <div className="w-full lg:w-[50vw] flex flex-row justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full lg:w-[50vw] h-32 text-slate-200 font-bold text-2xl flex flex-row justify-center items-center">
        {error}
         No data available
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full lg:w-[50vw] h-32 text-slate-200 font-bold text-2xl flex flex-row justify-center items-center">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
      {data?.results.map((results) => (
        <div
          key={results.id}
          className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
        >
          <CardMovies
            title={results.title}
            imageUrl={thumb + results.poster_path}
            category="Action"
            // onPlay={() => ()}
          />
        </div>
      ))}
    </div>
  );
};

export default ResponsiveGrid;
