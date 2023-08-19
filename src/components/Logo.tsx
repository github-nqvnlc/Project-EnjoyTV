import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <p
      onClick={() => navigate("/")}
      className="text-[30px] font-bold py-5 text-slate-300 cursor-pointer"
    >
      ENJOY<span className="text-amber-400">TV</span>
    </p>
  );
};

export default Logo;
