import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import { useLoaderData } from "react-router";
import Roommate from "./Roommate";

const Home = () => {
  const roommates = useLoaderData();
  console.log(roommates);
  return (
    <div>
      <Banner />
      <div>
        <h2 className="text-3xl text-center font-semibold">
          Featured Roommates
        </h2>
        <p className="text-center">
          Discover our top available roommate listings based on compatibility
          and preferences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {roommates.map((roommate) => (
            <Roommate key={roommate._id} roommate={roommate}></Roommate>
          ))}
        </div>
      </div>
      <HowItWorks />
    </div>
  );
};

export default Home;
