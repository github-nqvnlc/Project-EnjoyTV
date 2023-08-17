import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import VerticalNavbar from "./components/verticalNavbar/VerticalNavbar";
import Banner from "./components/Banner";

const App: React.FC = () => {
  return (
    <div className="relative h-screen w-screen">
      <Navbar />
      <VerticalNavbar />
      <Banner />
    </div>
  );
};

export default App;
