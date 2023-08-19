import { AiFillCaretRight } from "react-icons/Ai";

const SiderBar = () => {
  return (
    <>
      <div className="w-[20vw] hidden lg:flex flex-col gap-2 font-bold">
        <div className="w-full rounded-xl p-5 bg-slate-200 cursor-pointer">
          <div className="flex flex-row justify-between items-center">
            <div>Sort</div>
            <div>
              <AiFillCaretRight size={20} />
            </div>
          </div>
          <div className="hidden"></div>
        </div>
        <div className="w-full rounded-xl p-5 bg-slate-200 cursor-pointer">
          <div className="flex flex-row justify-between items-center">
            <div>Filter</div>
            <div>
              <AiFillCaretRight size={20} />
            </div>
          </div>
          <div className="hidden"></div>
        </div>
      </div>
    </>
  );
};

export default SiderBar;
