import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Roommate from "./Roommate";

const BrowseListing = () => {
  const roommates = useLoaderData();
  const [usersData, setUsersData] = useState([]);
  // console.log(roommates);
  useEffect(() => {
    document.title = "Browse Listing || RomeoMatch";
  }, []);

  useEffect(() => {
    fetch(`https://roommate-finder-server-mu.vercel.app/users`)
      .then((res) => res.json())
      .then((json) => setUsersData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-20 mb-5">
      <h2 className="text-3xl text-center w-11/12 mx-auto font-semibold">
        Browse Roommate Listings
      </h2>
      <p className="text-sm text-center my-5 w-2/4 mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-5 mt-10">
        {roommates.map((roommate) => (
          <Roommate
            key={roommate._id}
            usersData={usersData}
            roommate={roommate}
          ></Roommate>
        ))}
      </div>
    </div>
  );
};

export default BrowseListing;
