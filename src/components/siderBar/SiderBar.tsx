import React from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import Sort from "./Sort";

const SiderBar = () => {
  const [toggleSort, setToggleSort] = React.useState(false);
  const [toggleFilter, setToggleFilter] = React.useState(true);
  return (
    <>
      <div className="w-[20vw] hidden lg:flex flex-col gap-2 font-bold">
        <div className="w-full rounded-xl p-5 bg-slate-200 cursor-pointer">
          <div
            className="flex flex-row justify-between items-center"
            onClick={() => setToggleSort(!toggleSort)}
          >
            <div>Sort</div>
            <div className="cursor-pointer">
              {toggleSort ? (
                <AiFillCaretDown size={20} />
              ) : (
                <AiFillCaretRight size={20} />
              )}
            </div>
          </div>
          <div
            className={`${
              toggleSort ? "block" : "hidden"
            } animate-refloat duration-200`}
          >
            <Sort />
          </div>
        </div>
        <div className="w-full rounded-xl p-5 bg-slate-200 cursor-pointer">
          <div
            className="flex flex-row justify-between items-center"
            onClick={() => setToggleFilter(!toggleFilter)}
          >
            <div>Filter</div>
            <div className="cursor-pointer">
              {toggleFilter ? (
                <AiFillCaretDown size={20} />
              ) : (
                <AiFillCaretRight size={20} />
              )}
            </div>
          </div>
          <div
            className={`${
              toggleFilter ? "block" : "hidden"
            } animate-refloat duration-200`}
          >
            <Sort />
          </div>
        </div>
      </div>
    </>
  );
};

export default SiderBar;
