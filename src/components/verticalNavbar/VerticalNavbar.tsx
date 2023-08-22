import { BsFillCollectionPlayFill } from "react-icons/bs";
import { AiOutlineFire, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/Md";

const VerticalNavbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen hidden lg:flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className=" text-slate-200/70 p-4 flex flex-col items-center hover:scale-110 hover:text-slate-200 duration-200 cursor-pointer">
          <AiOutlineHome size={20} />
          <p className="text-sm font-extralight">Home</p>
        </div>
        <div className=" text-slate-200/70 p-4 flex flex-col items-center hover:scale-110 hover:text-slate-200 duration-200 cursor-pointer">
          <AiOutlineFire size={20} />
          <p className="text-sm font-extralight">Trending</p>
        </div>
        <div className=" text-slate-200/70 p-4 flex flex-col items-center hover:scale-110 hover:text-slate-200 duration-200 cursor-pointer">
          <MdOutlineExplore size={20} />
          <p className="text-sm font-extralight">Explore</p>
        </div>
        <div className=" text-slate-200/70 p-4 flex flex-col items-center hover:scale-110 hover:text-slate-200 duration-200 cursor-pointer">
          <BsFillCollectionPlayFill size={20} />
          <p className="text-sm font-extralight">Movies</p>
        </div>
        <div className=" text-slate-200/70 p-4 flex flex-col items-center hover:scale-110 hover:text-slate-200 duration-200 cursor-pointer">
          <AiOutlineHeart size={20} />
          <p className="text-sm font-extralight">Favorite</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavbar;
