import Heading from "../Heading";

import { BsPlay } from "react-icons/bs";
import Loader from "../Loader";

interface CardMoviesProps {
  imageUrl?: string;
  title?: string;
  category?: string;
  isLoading?: boolean;
  onPlay?: () => void;
}

const CardMovies: React.FC<CardMoviesProps> = ({
  imageUrl,
  title,
  category,
  isLoading,
  onPlay,
}) => {
  if (isLoading) {
    return (
      <div className=" w-full h-full group">
        <div className="flex flex-row justify-center items-center">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full cursor-pointer group"
      onClick={onPlay}
    >
      <img
        className="w-full h-full object-cover rounded-xl group-hover:scale-105"
        src={imageUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black rounded-xl group-hover:scale-105"></div>
      <div className="absolute bottom-[1px] w-full px-3 flex flex-row items-end justify-between">
        <Heading
          title={title}
          subtitle={category}
          magrin={2}
          size="16px"
          color="white"
        />
        <div className="flex justify-center items-center p-2 my-2 rounded-full text-slate-200 bg-amber-400 cursor-pointer hover:scale-110 duration-200">
          <BsPlay size={30} />
        </div>
      </div>
    </div>
  );
};

export default CardMovies;
