import Navbar from "../components/navbar/Navbar";
import VerticalNavbar from "../components/verticalNavbar/VerticalNavbar";

import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import NoPage from "./NoPage";
import PopularPage from "./PopularPage";
import Container from "../components/Container";
import NowPlaying from "./NowPlaying";

const Layout = () => {
  return (
    <div className="m-0">
      <Navbar />
      <VerticalNavbar />
      <div className="my-24">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
