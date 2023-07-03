import React from "react";
import TabSwitch from "../components/Tab";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl p-6 uppercase">admin portal</h1>
      </div>
      <div>
        <TabSwitch />
      </div>
    </>
  );
};

export default Home;
