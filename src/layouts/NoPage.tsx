import Container from "../components/Container";
import Heading from "../components/Heading";
import { FaHeartBroken } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        className="w-full h-[70vh] flex flex-col items-center justify-center text-slate-200 gap-5"
        onClick={() => navigate("/")}
      >
        <FaHeartBroken size={50} />
        <Heading
          title="Ohsss!"
          subtitle="Results are not available!"
          center={true}
        />
        <div className="w-52 p-2 rounded-2xl text-center bg-slate-200 text-slate-700 hover:bg-amber-500 hover:text-slate-200 cursor-pointer">
          Back to Homepage
        </div>
      </div>
    </Container>
  );
};

export default NoPage;
