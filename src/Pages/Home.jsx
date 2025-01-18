import React from "react";
import Banner from "../components/Banner/Banner";
import Companies from "../components/Companies/Companies";
import Buyers from "../components/Buyers/index";
import Provide from "../components/Provide/index";
import Why from "../components/Why/index";
import Network from "../components/Network/index";
import Clientsay from "../components/Clientsay/index";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <main>
        <Banner />
        <Companies />
        <Buyers />
        <Provide />
        <Why />
        <Network />
        <Clientsay />
        <Newsletter />
      </main>
    </div>
  );
};

export default Home;
