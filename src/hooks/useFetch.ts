import { useState, useEffect } from "react";

// Định nghĩa kiểu dữ liệu cho response của API
export interface ApiResponse {
  id: number | null | undefined;
  poster_path: string;
  title: string | undefined;
  // Định nghĩa các trường dữ liệu bạn mong đợi từ API
  page: number;
  results: Array<ApiResponse>;
  total_pages: number | undefined | null;
  total_results: number;
}

// Custom hook sử dụng TypeScript
const useFetch = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const jsonData: ApiResponse = await response.json();
        setData(jsonData);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
