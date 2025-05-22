import React, { useEffect } from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import { Link, useLoaderData } from "react-router";
import Roommate from "./Roommate";
import { FaArrowRightLong } from "react-icons/fa6";
import SuccessStory from "./SuccessStory";
import Review from "./Review";

const Home = () => {
  const roommates = useLoaderData();
  // console.log(roommates);
  useEffect(() => {
    document.title = "Home || RomeoMatch";
  }, []);
  return (
    <div>
      <Banner />
      <div className="my-10">
        <h2 className="text-3xl text-center font-semibold">
          Featured Roommates
        </h2>
        <p className="text-center mb-5 text-sx">
          Discover our top available roommate listings based on compatibility
          and preferences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto">
          {roommates.map((roommate) => (
            <Roommate key={roommate._id} roommate={roommate}></Roommate>
          ))}
        </div>
        <div className="text-center mt-12 flex items-center justify-center">
          <button className="btn btn-primary flex ">
            <Link to="/browseListing">View All Listings</Link>
            <FaArrowRightLong className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      <HowItWorks />
      <SuccessStory />
      <Review />
    </div>
  );
};

export default Home;
