import React from "react";
import HomeDarkAnimation from "../views/Main";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
      <Route path="/" element={<HomeDarkAnimation />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
