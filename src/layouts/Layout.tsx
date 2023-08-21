import Navbar from "../components/navbar/Navbar";
import VerticalNavbar from "../components/verticalNavbar/VerticalNavbar";

import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import NoPage from "./NoPage";
import Container from "../components/Container";
import MoviesPage from "./MoviesPage";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="m-0">
      <Navbar />
      <VerticalNavbar />
      <div className="my-24">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/popular"
              element={
                <MoviesPage
                  url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
                  title="Popular Movies"
                />
              }
            />
            <Route
              path="/now-playing"
              element={
                <MoviesPage
                  url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
                  title="Now playing"
                />
              }
            />
            <Route
              path="/up-coming"
              element={
                <MoviesPage
                  url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                  title="Up coming"
                />
              }
            />
            <Route
              path="/top-rated"
              element={
                <MoviesPage
                  url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
                  title="Top rated"
                />
              }
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
