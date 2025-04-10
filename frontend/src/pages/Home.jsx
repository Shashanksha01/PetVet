import React from "react";
import Header from "../components/Header";
import DocTypes from "../components/DocTypes";
import TopDoctors from "../components/TopDoctors";
import AccoutsCreation from "../components/AccoutsCreation";
const Home = () => {
  return (
    <div>
      <Header />
      <DocTypes />
      <TopDoctors />
      <AccoutsCreation />
    </div>
  );
};

export default Home;
