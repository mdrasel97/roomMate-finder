import React from "react";
import { useLoaderData } from "react-router";
import Roommate from "./Roommate";

const BrowseListing = () => {
  const roommates = useLoaderData();
  console.log(roommates);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {roommates.map((roommate) => (
          <Roommate key={roommate._id} roommate={roommate}></Roommate>
        ))}
      </div>
    </div>
  );
};

export default BrowseListing;
