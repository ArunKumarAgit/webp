import { Route, Routes } from "react-router-dom";
import Ca from "../components/test/Ca";
import Ca1 from "../components/test/Ca1";
import React from "react";
const mainRouting = () => {
  return (
    <Routes>
      <Route path="/lname" element={<Ca />} />
      <Route path="/fname" element={<Ca1 />} />
    </Routes>
  );
};

export default mainRouting;
