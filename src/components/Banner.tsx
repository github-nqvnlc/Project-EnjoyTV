import React from "react";

import { BsPlay } from "react-icons/bs";

interface BannerProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const Banner: React.FC<BannerProps> = ({ title, imageUrl, subtitle }) => {
  return (
    <div className="relative h-auto mt-2">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute top-1/2 left-20 transform -translate-y-1/2">
        <div className="text-[45px] w-96 font-bold text-white">{title}</div>
        <div className="text-[16px] w-96 font-bold text-amber-400 mt-2">
          {subtitle}
        </div>
        <div className="flex flex-row items-center gap-3  mt-4">
          <div className="flex justify-center items-center p-2 rounded-full text-slate-200 bg-amber-400 cursor-pointer hover:scale-110 duration-200">
            <BsPlay size={30} />
          </div>
          <div className="text-[16px] font-bold text-slate-200">
            Watch the trailer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
