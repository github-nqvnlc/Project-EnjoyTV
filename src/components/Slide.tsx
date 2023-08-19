import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardMovies from "./movies/CardMovies";
import { ApiResponse } from "../hooks/useFetch";

interface SliderProps {
  data: ApiResponse | null;
  loading: boolean;
  error: string | null;

  time?: number;
}

const Slide: React.FC<SliderProps> = ({ data, loading, error, time }) => {
  const thumb = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

  if (loading) {
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{
          delay: time || 300, // Thời gian trễ giữa các slide (3 giây)
          disableOnInteraction: false, // Cho phép autoplay tiếp tục khi người dùng tương tác
        }}
      >
        <SwiperSlide>
          <CardMovies isLoading={loading} />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovies isLoading={loading} />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovies isLoading={loading} />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovies isLoading={loading} />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovies isLoading={loading} />
        </SwiperSlide>
      </Swiper>
    );
  }

  if (error) {
    return (
      <div className="w-full h-32 text-slate-200 font-bold text-2xl flex flex-row justify-center items-center">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full h-32 text-slate-200 font-bold text-2xl flex flex-row justify-center items-center">
        No data available
      </div>
    );
  }

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // Thời gian trễ giữa các slide (3 giây)
        disableOnInteraction: false, // Cho phép autoplay tiếp tục khi người dùng tương tác
      }}
    >
      {data?.results.map((result) => (
        <SwiperSlide key={result.id}>
          <CardMovies
            title={result.title}
            imageUrl={thumb + result.poster_path}
            category="Action"
            // onPlay={() => ()}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
