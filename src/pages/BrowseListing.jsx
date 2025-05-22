import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import Roommate from "./Roommate";

const BrowseListing = () => {
  const roommates = useLoaderData();
  // console.log(roommates);
  useEffect(() => {
    document.title = "Browse Listing || RomeoMatch";
  }, []);
  return (
    <div className="mt-20 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-5 mt-10">
        {roommates.map((roommate) => (
          <Roommate key={roommate._id} roommate={roommate}></Roommate>
        ))}
      </div>
    </div>
  );
};

export default BrowseListing;
