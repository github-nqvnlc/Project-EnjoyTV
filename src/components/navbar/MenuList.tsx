import { useNavigate } from "react-router-dom";
const MenuList = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:flex flex-row items-center gap-7">
      <div className="relative group">
        <div className="text-lg py-2 text-slate-300 font-light cursor-pointer">
          Movies
        </div>
        <div className="hidden absolute z-20 left-0 bottom-[-5] w-52 bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg cursor-pointer group-hover:block">
          <div
            onClick={() => navigate("/popular")}
            className="block p-2 hover:bg-slate-300 hover:text-slate-700"
          >
            Popular
          </div>
          <div
            onClick={() => navigate("/now_playing")}
            className="block p-2 hover:bg-slate-300 hover:text-slate-700"
          >
            Now playing
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Up comming
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Top Rated
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="py-2 text-lg text-slate-300 font-light cursor-pointer">
          TV Shows
        </div>
        <div className="hidden absolute z-20 left-0 bottom-[-5] w-52 bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg cursor-pointer group-hover:block">
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Popular
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Airing Today
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            On TV
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Top Rated
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="py-2 text-lg text-slate-300 font-light cursor-pointer">
          People
        </div>
        <div className="hidden absolute z-20 left-0 bottom-[-5] w-52 bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg cursor-pointer group-hover:block">
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Popular People
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="py-2 text-lg text-slate-300 font-light cursor-pointer">
          More
        </div>
        <div className="hidden absolute z-20 left-0 bottom-[-5] w-52 bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg cursor-pointer group-hover:block">
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Discussions
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Leaderboard
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            Support
          </div>
          <div className="block p-2 hover:bg-slate-300 hover:text-slate-700">
            API
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
