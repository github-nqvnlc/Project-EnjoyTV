import React from "react";
import useFetch, { ApiResponse } from "../../hooks/useFetch";

const Filter = () => {
  const url =
    "https://api.themoviedb.org/3/configuration/countries?language=en-US";

  const { data } = useFetch(url);
  console.log(data);
  return (
    <div className="flex flex-col items-start justify-start h-72 my-4">
      <div className="sticky top-0 left-0 bg-slate-200 w-full my-2 ">
        Countries
      </div>
      <div className=" font-light overflow-y-scroll">
        {data?.map((data: ApiResponse) => (
          <div>{data.english_name}</div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
